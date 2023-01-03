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
          }
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

/**
 * aタグをパース
 */
export const perseLink = (
  contents: IBlog['body'],
  blogCardData: IBlogCardData[]
) => {
  const CLASS_NAME_BASE = 'blogCard' as const
  const NO_IMAGE_PATH = '/images/noimage.webp' as const

  const $ = cheerio.load(contents, { _useHtmlParser2: true })

  $('a').each((i, element) => {
    // prettier-ignore
    $(element).replaceWith(`
      <a href="${blogCardData[i].url}" target="_blank" rel="noopener noreferrer" class="${CLASS_NAME_BASE}">
        ${blogCardData[i].image
          ? `<img src="${blogCardData[i].image}" class="${CLASS_NAME_BASE}__img" />`
          : `<img src="${NO_IMAGE_PATH}" class="${CLASS_NAME_BASE}__img" />`}
        <span class="${CLASS_NAME_BASE}__content">
          <span class="${CLASS_NAME_BASE}__title">
            ${blogCardData[i].title ? `${blogCardData[i].title}` : ''}
          </span>
          <span class="${CLASS_NAME_BASE}__description">
            ${blogCardData[i].description ? `${blogCardData[i].description}` : ''}
          </span>
        </span>
      </a>
    `)
  })

  return $.html()
}
