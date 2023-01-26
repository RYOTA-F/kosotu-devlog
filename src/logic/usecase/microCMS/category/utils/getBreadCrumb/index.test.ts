import { getBreadCrumbDataFromCategory } from './index'
import {
  categoryDataChildrenMock,
  resultCategoryChildren,
  categoryDataParentMock,
  resultCategoryParent,
} from './__mocks__'

describe('getBreadCrumbDataFromCategory', () => {
  describe('子カテゴリの場合', () => {
    test('パンくず情報を取得できる', () => {
      const result = getBreadCrumbDataFromCategory(categoryDataChildrenMock)
      expect(result).toEqual(resultCategoryChildren)
    })
  })

  describe('親カテゴリの場合', () => {
    test('パンくず情報を取得できる', () => {
      const result = getBreadCrumbDataFromCategory(categoryDataParentMock)
      expect(result).toEqual(resultCategoryParent)
    })
  })
})
