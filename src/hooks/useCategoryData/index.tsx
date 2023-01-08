import { useContext } from 'react'
/* Stores */
import {
  CategoryContext,
  CATEGORY_ACTION_TYPES,
  initialCategoryState,
} from '@/stores/category'
import { ICategory } from '@/src/types'

const useCategoryData = () => {
  const { state, dispatch } = useContext(CategoryContext)

  // カテゴリ
  const category = state.category

  // カテゴリを更新
  const setCategory = (category: ICategory) => {
    dispatch({ type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY, payload: category })
  }

  // カテゴリを更新
  const resetCategory = () => {
    dispatch({
      type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY,
      payload: initialCategoryState.category,
    })
  }

  return { category, setCategory, resetCategory }
}

export default useCategoryData
