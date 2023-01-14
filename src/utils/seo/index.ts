/* Const */
import { PAGE, FIXED_PAGE, SITE, type TFixedPage } from '@/const/index'
import { DISCLAIMER } from '@/components/organisms/Disclaimer'
import { PRIVACY_POLICY } from '@/components/organisms/PrivacyPolicy'
import { PROFILE } from '@/components/organisms/Profile'
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

/**
 * SEO情報を取得: 固定ページ
 */
export const getSeoFromFixed = (pageType: TFixedPage) => {
  const { name, url } = getFixedPageData(pageType)

  return {
    title: `${name} - ${SITE.TITLE}`,
    description: initialCommonState.seo.description,
    url: `${SITE.URL}${url}`,
    image: initialCommonState.seo.image,
  }
}

/**
 * 固定ページ情報を判定
 */
const getFixedPageData = (
  pageType: TFixedPage
): { name: string; url: string } => {
  switch (pageType) {
    case FIXED_PAGE.DISCLAIMER:
      return {
        name: DISCLAIMER.TITEL,
        url: PAGE.DISCLAIMER,
      }
    case FIXED_PAGE.PRIVACY_POLICY:
      return {
        name: PRIVACY_POLICY.TITLE,
        url: PAGE.PRIVACY_POLICY,
      }
    case FIXED_PAGE.PROFILE:
      return {
        name: PROFILE.TITLE,
        url: PAGE.PROFILE,
      }
    default:
      return {
        name: SITE.TITLE,
        url: SITE.URL,
      }
  }
}
