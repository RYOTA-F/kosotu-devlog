/* Const */
import { PAGE, SITE } from '@/const/index'
/* Store */
import { initialCommonState } from '@/stores/common'
/* Types */
import { IBlog, ICategory, ITag } from '@/types/index'

/**
 * SEO情報を取得: 投稿
 */
export const getSeoFromBlog = (blog: IBlog) => {
  return {
    title: `${blog.title} - ${SITE.TITLE}`,
    description: blog.description,
    url: `${SITE.URL}${PAGE.BLOG}${blog.id}`,
    image: blog.image.url,
  }
}

/**
 * SEO情報を取得: カテゴリ
 */
export const getSeoFromCategory = (category: ICategory) => {
  return {
    title: `${category.name} - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: `${SITE.URL}${PAGE.CATEGORY}${category.id}`,
    image: initialCommonState.seo.image,
  }
}

/**
 * SEO情報を取得: タグ
 */
export const getSeoFromTag = (tag: ITag) => {
  return {
    title: `${tag.name} - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: `${SITE.URL}${PAGE.TAG}${tag.id}`,
    image: initialCommonState.seo.image,
  }
}
