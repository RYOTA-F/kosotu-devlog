/* Types */
import { IBreadCrumb } from '@/types/index'

/**
 * 固定ページ
 */
export const getBreadCrumbDataFromFixed = (title: string) => {
  const breadCrumb: IBreadCrumb = {
    categoryParentId: null,
    categoryParentName: null,
    categoryChildId: null,
    categoryChildName: null,
    currentName: title,
  }

  return breadCrumb
}
