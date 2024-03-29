// @ts-nocheck
import cheerio from 'cheerio'
import hljs from 'highlight.js'
/* Types */
import { IBlog, IBlogCardData, ITableOfContents } from '@/types/index'
/* Utils */
import { getBlogCardDom } from '@/utils/index'

/**
 * 投稿本文をパース
 */
export const perseBlogBody = async (contents: IBlog['body']) => {
  const $ = cheerio.load(contents, { _useHtmlParser2: true })

  // コードブロックをパース
  $('pre code').each((_, element) => {
    const result = hljs.highlightAuto($(element).text())
    $(element).html(result.value)
    $(element).addClass('hljs')
  })

  // ブログカード情報を取得
  const blogCardDatas = await getBlogCardDatas($.html())
  // ブログカードにパース
  $('a').each((i, element) => {
    $(element).replaceWith(getBlogCardDom(blogCardDatas[i]))
  })

  // 目次を取得
  const tableOfContents: ITableOfContents[] = $('h2, h3')
    .toArray()
    .map((element: cheerio.Element) => ({
      id: element.attribs.id,
      text: element.children[0].data,
      type: element.name,
    }))

  return { body: $.html(), tableOfContents }
}

/**
 * ブログカード情報を取得
 */
export const getBlogCardDatas = async (contents: IBlog['body']) => {
  const $ = cheerio.load(contents, { _useHtmlParser2: true })

  const convertLinks = $('a')
    .toArray()
    .map((data) => {
      // urlをhttps://~形式に
      const url =
        data.attribs.href.indexOf('http') === -1 &&
        process.env.NEXT_PUBLIC_DOMEIN
          ? `${process.env.NEXT_PUBLIC_DOMEIN}${data.attribs.href}` // eslint-disable-line
          : data.attribs.href
      return { url: url }
    })

  const temps = await Promise.all(
    convertLinks.map(async (link) => {
      const metas = await fetch(link.url as string)
        .then((res) => res.text())
        .then((text) => {
          const $ = cheerio.load(text)
          const metas = $('meta').toArray()
          const metaData: IBlogCardData = {
            url: link.url,
            title: '',
            description: '',
            image: '',
            site: '',
          }
          for (let i = 0; i < metas.length; i++) {
            // タイトル
            if (
              metas[i].attribs?.property === 'og:title' ||
              metas[i].attribs?.name === 'twitter:title'
            )
              metaData.title = metas[i].attribs.content
            // 説明
            if (metas[i].attribs?.property === 'og:description')
              metaData.description = metas[i].attribs.content
            // 画像
            if (
              metas[i].attribs?.property === 'og:image' ||
              metas[i].attribs?.name === 'twitter:image'
            )
              metaData.image = metas[i].attribs.content
            // サイト名
            if (metas[i].attribs?.property === 'og:site_name')
              metaData.site = metas[i].attribs.content
          }
          return metaData
        })
        .catch((e) => {
          return e as Error
        })
      return metas
    })
  )

  return temps.filter((temp) => temp !== undefined) as IBlogCardData[]
}
