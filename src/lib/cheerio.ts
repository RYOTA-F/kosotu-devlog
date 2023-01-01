// @ts-nocheck
import cheerio from 'cheerio'
import hljs from 'highlight.js'
/* Types */
import {
  IBlog,
  IBlogCardData,
  IBlogTableOfContents,
} from '@/types/microCMS/blog'

/**
 * 投稿本文をパース
 */
export const perseBlogBody = (contents: IBlog['body']) => {
  const $ = cheerio.load(contents, { _useHtmlParser2: true })

  // コードブロックをパース
  $('pre code').each((_, element) => {
    const result = hljs.highlightAuto($(element).text())
    $(element).html(result.value)
    $(element).addClass('hljs')
  })

  // 目次を取得
  const tableOfContents: IBlogTableOfContents[] = $('h2, h3')
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
      //fetchでurl先のhtmlデータを取得
      const metas = await fetch(link.url as string)
        .then((res) => res.text())
        .then((text) => {
          //各サイトのmetaタグの情報をすべてmetasの配列に
          const $ = cheerio.load(text)
          const metas = $('meta').toArray()
          const metaData: IBlogCardData = {
            url: link.url,
            title: '',
            description: '',
            image: '',
          }
          //各サイトのmeta情報で、title,description,imageのurlだけ取り出す
          for (let i = 0; i < metas.length; i++) {
            if (metas[i].attribs?.property === 'og:title')
              metaData.title = metas[i].attribs.content
            if (metas[i].attribs?.property === 'og:description')
              metaData.description = metas[i].attribs.content
            if (metas[i].attribs?.property === 'og:image')
              metaData.image = metas[i].attribs.content
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
