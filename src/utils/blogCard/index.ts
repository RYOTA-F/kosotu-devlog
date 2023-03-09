/* Const */
import { CLASS_NAME, TWITTER, NO_IMAGE_PATH } from './const'
/* Types */
import { IBlogCardData } from '@/types/microCMS/blog'

/**
 *  ブログカードのDOMを取得
 */
export const getBlogCardDom = (blogCardData: IBlogCardData) => {
  // Twitterリンク
  if (
    blogCardData?.url?.includes(TWITTER.URL) &&
    !blogCardData?.url?.includes(TWITTER.CARD_LINK)
  ) {
    return getBlogCardTwitterDom(blogCardData)
  }

  // データが正常に取得できない場合
  if (!blogCardData.title && !blogCardData.description) {
    return getBlogCardNoDataDom(blogCardData)
  }

  // デフォルト
  return getBlogCardDefaultDom(blogCardData)
}

/**
 * TwitterリンクのDomを取得
 */
const getBlogCardTwitterDom = (blogCardData: IBlogCardData) => {
  // prettier-ignore
  return `
  <a href="${blogCardData.url}" target="_blank" rel="noopener noreferrer" class="${CLASS_NAME.TWITTER}">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#1d9bf0" stroke="#1d9bf0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label={TWITTER_SVG_ARIA_LABEL}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
    <span class="${CLASS_NAME.TWITTER}__content">
      <span class="${CLASS_NAME.TWITTER}__description">@${blogCardData.url.replace(TWITTER.URL,'')}</span>
    </span>
    <span class="${CLASS_NAME.TWITTER}__site">${TWITTER.SITE_NAME}</span>
  </a>
`
}

/**
 * データが正常に取得できない場合のDomを取得
 */
const getBlogCardNoDataDom = (blogCardData: IBlogCardData) => {
  const image =
    blogCardData.image && blogCardData.image.charAt(0) !== '/'
      ? blogCardData.image
      : NO_IMAGE_PATH
  const site = `${blogCardData.site || ''}`

  return `
    <a href="${blogCardData.url}" target="_blank" rel="noopener noreferrer" class="${CLASS_NAME.BASE}">
      <img src="${image}" class="${CLASS_NAME.BASE}__img" />
      <span class="${CLASS_NAME.BASE}__content">
        <span class="${CLASS_NAME.BASE}__description">${blogCardData.url}</span>
      </span>
      <span class="${CLASS_NAME.BASE}__site">${site}</span>
    </a>
  `
}

/**
 * デフォルトのDomを取得
 */
const getBlogCardDefaultDom = (blogCardData: IBlogCardData) => {
  const image =
    blogCardData.image && blogCardData.image.charAt(0) !== '/'
      ? blogCardData.image
      : NO_IMAGE_PATH
  const title = `${blogCardData.title || ''}`
  const description = `${blogCardData.description || ''}`
  const site = `${blogCardData.site || ''}`

  return `
    <a href="${blogCardData.url}" target="_blank" rel="noopener noreferrer" class="${CLASS_NAME.BASE}">
      <img src="${image}" class="${CLASS_NAME.BASE}__img" />
      <span class="${CLASS_NAME.BASE}__content">
        <span class="${CLASS_NAME.BASE}__title">${title}</span>
        <span class="${CLASS_NAME.BASE}__description">${description}</span>
      </span>
      <span class="${CLASS_NAME.BASE}__site">${site}</span>
    </a>
  `
}
