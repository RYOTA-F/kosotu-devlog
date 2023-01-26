import { getBreadCrumbDataFromCategory, getBreadCrumbDataFromFixed } from '.'
import {
  categoryDataChildrenMock,
  resultCategoryChildren,
  categoryDataParentMock,
  resultCategoryParent,
  fixedDataMock,
  resuldFixed,
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

describe('getBreadCrumbDataFromFixed', () => {
  test('パンくず情報を取得できる', () => {
    const result = getBreadCrumbDataFromFixed(fixedDataMock)
    expect(result).toEqual(resuldFixed)
  })
})
