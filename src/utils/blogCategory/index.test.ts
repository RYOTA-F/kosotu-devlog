import { getCategoryRelation, getCategoryParentName } from './'
import {
  categoryRelationChildrenMock,
  categoryRelationParentMock,
} from './__mocks__'
import { CATEGORY_PARENT } from '@/const/index'

describe('getCategoryRelation', () => {
  describe('リレーション情報が生成される', () => {
    test('isParent が false の場合', () => {
      const { isParent, categoryParent, categoryChildren } =
        getCategoryRelation(categoryRelationChildrenMock)

      expect(isParent).toEqual(categoryRelationChildrenMock.isParent)
      expect(categoryParent).toEqual(categoryRelationChildrenMock.parent[0])
      expect(categoryChildren).toEqual(null)
    })

    test('isParent が true の場合', () => {
      const { isParent, categoryParent, categoryChildren } =
        getCategoryRelation(categoryRelationParentMock)

      expect(isParent).toEqual(categoryRelationParentMock.isParent)
      expect(categoryParent).toEqual(null)
      expect(categoryChildren).toEqual(categoryRelationParentMock.children[0])
    })
  })
})

describe('getCategoryParentName', () => {
  describe(`${CATEGORY_PARENT.FRONT_END.NAME}`, () => {
    test('カテゴリ名を取得できる', () => {
      const result = getCategoryParentName(CATEGORY_PARENT.FRONT_END.ID)
      expect(result).toEqual(CATEGORY_PARENT.FRONT_END.NAME)
    })
  })
  describe(`${CATEGORY_PARENT.BACK_END.NAME}`, () => {
    test('カテゴリ名を取得できる', () => {
      const result = getCategoryParentName(CATEGORY_PARENT.BACK_END.ID)
      expect(result).toEqual(CATEGORY_PARENT.BACK_END.NAME)
    })
  })
  describe(`${CATEGORY_PARENT.INFRA.NAME}`, () => {
    test('カテゴリ名を取得できる', () => {
      const result = getCategoryParentName(CATEGORY_PARENT.INFRA.ID)
      expect(result).toEqual(CATEGORY_PARENT.INFRA.NAME)
    })
  })
  describe(`${CATEGORY_PARENT.CAREER.NAME}`, () => {
    test('カテゴリ名を取得できる', () => {
      const result = getCategoryParentName(CATEGORY_PARENT.CAREER.ID)
      expect(result).toEqual(CATEGORY_PARENT.CAREER.NAME)
    })
  })
  describe(`${CATEGORY_PARENT.EVENT.NAME}`, () => {
    test('カテゴリ名を取得できる', () => {
      const result = getCategoryParentName(CATEGORY_PARENT.EVENT.ID)
      expect(result).toEqual(CATEGORY_PARENT.EVENT.NAME)
    })
  })
  describe(`${CATEGORY_PARENT.OTHERS.NAME}`, () => {
    test(`${CATEGORY_PARENT.OTHERS.NAME} を渡す場合`, () => {
      const result = getCategoryParentName(CATEGORY_PARENT.OTHERS.ID)
      expect(result).toEqual(CATEGORY_PARENT.OTHERS.NAME)
    })
    test('対象外のIDを渡す場合', () => {
      const result = getCategoryParentName('hoge')
      expect(result).toEqual(CATEGORY_PARENT.OTHERS.NAME)
    })
  })
})
