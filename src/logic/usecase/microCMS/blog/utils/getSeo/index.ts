/* Const */
import { PAGE, SITE } from '@/const/index'
/* Types */
import { IBlog } from '@/types/index'

/**
 * SEO情報を取得: 投稿
 */
export const getSeoFromBlog = (blog: IBlog) => {
  return {
    title: `${blog.title} - ${SITE.TITLE}`,
    description: blog.description,
    url: `${SITE.URL}${PAGE.ARTICLES}${blog.id}`,
    image: blog.image.url,
  }
}
