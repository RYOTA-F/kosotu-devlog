/* Types */
import { TBlogDetailApiResponseContents, IBlogBreadCrumb } from '@/types/index'
/* Utils */
import { getCategoryParentId } from '@/utils/blogCategory'

/**
 * パンくず情報を取得
 */
export const getBreadCrumbData = (contents: TBlogDetailApiResponseContents) => {
  const breadCrumb: IBlogBreadCrumb = {
    categoryParentId: getCategoryParentId(contents.categories[0].parent[0]),
    categoryParentName: contents.categories[0].parent[0],
    categoryChildId: contents.categories[0].id,
    categoryChildName: contents.categories[0].name,
    blogTitle: contents.title,
  }

  return breadCrumb
}
