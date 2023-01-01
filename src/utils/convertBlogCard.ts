import { IBlog, IBlogCardData } from '@/types/index'

/**
 * リンクをブログカードに変換
 */
export const convertBlogCardData = (
  body: IBlog['body'],
  blogCardData: IBlogCardData[]
) => {
  let convertAfterBody = body

  for (let i = 0; i < blogCardData.length; i++) {
    convertAfterBody = convertAfterBody.replace(
      getConvertBeforeLinkTag(blogCardData[i].url),
      getConvertAfterLinkTag(blogCardData[i])
    )
  }

  return convertAfterBody
}

/**
 * 変換前のaタグを取得
 */
const getConvertBeforeLinkTag = (url: string) => {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a><br>`
}

/**
 * 変換後のaタグを取得
 */
const getConvertAfterLinkTag = (blogCardData: IBlogCardData) => {
  const baseClassName = 'blogCard'

  return `
  <a href="${
    blogCardData.url
  }" target="_blank" rel="noopener noreferrer" class="${baseClassName}">
    <img src="${blogCardData.image}" class="${baseClassName}__img" />
    <div class="${baseClassName}__content">
      <p class="${baseClassName}__title">
        ${blogCardData.title}
      </p>
      ${
        blogCardData.description
          ? `<span class="${baseClassName}__description">${blogCardData.description}</span>`
          : `<span class="${baseClassName}__description"></span>`
      }
    </div>
  </a>
`
}
