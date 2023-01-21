import {
  getBreadCrumbDataFromBlog,
  getBreadCrumbDataFromCategory,
  getBreadCrumbDataFromFixed,
} from '.'
import {
  blogDataChildrenMock,
  resultBlogChildren,
  blogDataParentMock,
  resultBlogParent,
  categoryDataChildrenMock,
  resultCategoryChildren,
  categoryDataParentMock,
  resultCategoryParent,
  fixedDataMock,
  resuldFixed,
} from './__mocks__'

describe('getBreadCrumbDataFromBlog', () => {
  describe('子カテゴリ の場合', () => {
    test('パンくず情報が取得できる', () => {
      const result = getBreadCrumbDataFromBlog(blogDataChildrenMock)
      expect(result).toEqual(resultBlogChildren)
    })
  })

  describe('親カテゴリ の場合', () => {
    test('パンくず情報が取得できる', () => {
      const result = getBreadCrumbDataFromBlog(blogDataParentMock)
      expect(result).toEqual(resultBlogParent)
    })
  })
})

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
