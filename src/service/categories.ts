/**
 * カテゴリーAPI
 * @package service
 */
/* config */
import globalAxios from '@/config/globalAxios'
/* constants */
import { initCategoryData } from '@/constants/initState'
/* types */
import { CategoryType } from '@/types/category'

/**
 * constant
 */
const BASE_URL = `${process.env.BASE_END_POINT}categories/`

/**
 * ブログ一覧取得
 * @param offset number
 * @returns blogData BlogDataType
 */
export const getCategories = async () => {
  let categories: CategoryType = initCategoryData

  try {
    const res = await globalAxios.get(BASE_URL)

    categories = res.data.contents
  } catch (error) {
    throw new Error(`API ERROR: getCategories`)
  }

  return categories
}

/**
 * カテゴリー詳細取得
 * @param id string
 * @returns category CategoryType
 */
export const getCategoryBy = async (id: string) => {
  let category: CategoryType = initCategoryData

  try {
    const res = await globalAxios.get(BASE_URL + id)

    category = res.data
  } catch (error) {
    throw new Error(`API ERROR: getCategoryBy`)
  }
  return category
}
