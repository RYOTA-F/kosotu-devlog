/* Const */
import { PAGE, GROBAL_MENU } from '@/const/index'
/* Types */
import { ICategory, IGlobalMenu } from '@/types/index'

/**
 * グローバルメニューを取得
 */
export const getGlobalMenu = (categories: ICategory[]) => {
  // カテゴリメニューを取得
  const categoryMenu = getCategoryMenu(categories)
  // 固定メニュー
  const fixedMenu = getFixedMenu()

  return [...categoryMenu, ...fixedMenu]
}

/**
 * カテゴリメニューを取得
 */
const getCategoryMenu = (categories: ICategory[]) => {
  // 親カテゴリ一覧
  const parentCategoryMenu: IGlobalMenu[] = categories
    .filter((v) => v.relation.isParent)
    .map((v) => ({
      label: v.name,
      url: v.id,
      children: [],
    }))

  // 子カテゴリを格納
  parentCategoryMenu.forEach((parent) =>
    categories.forEach((children) => {
      if (children.relation.parent[0]?.id === parent.url) {
        parent.children.push({
          label: children.name,
          url: `${PAGE.CATEGORY}${children.id}`,
        })
      }
    })
  )

  // 親カテゴリのURLを変換
  return parentCategoryMenu.map((v) => ({
    label: v.label,
    url: `${PAGE.CATEGORY}${v.url}`,
    children: v.children,
  }))
}

/**
 * 固定メニューを取得
 */
const getFixedMenu = (): IGlobalMenu[] => {
  return [
    {
      label: GROBAL_MENU.SITE_MAP.LABEL,
      url: GROBAL_MENU.SITE_MAP.URL,
      children: [],
    },
    {
      label: GROBAL_MENU.PROFILE.LABEL,
      url: GROBAL_MENU.PROFILE.URL,
      children: [],
    },
  ]
}
