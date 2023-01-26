/* Types */
import { IBreadCrumb } from '@/types/index'

/**
 * タグページ
 */
export const getBreadCrumbDataFromTag = (name: string) => {
  const breadCrumb: IBreadCrumb = {
    categoryParentId: null,
    categoryParentName: null,
    categoryChildId: null,
    categoryChildName: null,
    currentName: name,
  }

  return breadCrumb
}
