/* Types */
import { IBlogCardData } from '@/types/microCMS/blog'

/**
 *  ブログカードのDOMを取得
 */
export const getBlogCardDom = (blogCardData: IBlogCardData) => {
  const CLASS_NAME_BASE = 'blogCard' as const
  const NO_IMAGE_PATH = '/images/noimage.webp' as const

  const image = `${blogCardData.image || NO_IMAGE_PATH}`
  const title = `${blogCardData.title || ''}`
  const description = `${blogCardData.description || ''}`
  const site = `${blogCardData.site || ''}`

  if (!title && !description)
    return `
    <a href="${blogCardData.url}" target="_blank" rel="noopener noreferrer" class="${CLASS_NAME_BASE}">
      <img src="${image}" class="${CLASS_NAME_BASE}__img" />
      <span class="${CLASS_NAME_BASE}__content">
        <span class="${CLASS_NAME_BASE}__description">${blogCardData.url}</span>
      </span>
      <span class="${CLASS_NAME_BASE}__site">${site}</span>
    </a>
  `

  return `
    <a href="${blogCardData.url}" target="_blank" rel="noopener noreferrer" class="${CLASS_NAME_BASE}">
      <img src="${image}" class="${CLASS_NAME_BASE}__img" />
      <span class="${CLASS_NAME_BASE}__content">
        <span class="${CLASS_NAME_BASE}__title">${title}</span>
        <span class="${CLASS_NAME_BASE}__description">${description}</span>
      </span>
      <span class="${CLASS_NAME_BASE}__site">${site}</span>
    </a>
  `
}
