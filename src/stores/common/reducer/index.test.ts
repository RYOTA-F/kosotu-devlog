import {
  commonReducer,
  initialCommonState,
  COMMON_ACTION_TYPES,
  TCommonActions,
} from '../'
import {
  breadCrumbStateMock,
  tableOfContentsStateMock,
  paginationStateMock,
  seoStateMock,
} from '@/stores/__mocks__/common/mock'

describe('commonReducer', () => {
  describe(`${COMMON_ACTION_TYPES.UPDATE_BREAD_CRUMB}`, () => {
    test('breadClumb が更新される', () => {
      const action: TCommonActions = {
        type: COMMON_ACTION_TYPES.UPDATE_BREAD_CRUMB,
        payload: breadCrumbStateMock,
      }

      expect(commonReducer(initialCommonState, action)).toEqual({
        ...initialCommonState,
        breadClumb: action.payload,
      })
    })
  })

  describe(`${COMMON_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS}`, () => {
    test('tableOfContents が更新される', () => {
      const action: TCommonActions = {
        type: COMMON_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS,
        payload: tableOfContentsStateMock,
      }

      expect(commonReducer(initialCommonState, action)).toEqual({
        ...initialCommonState,
        tableOfContents: action.payload,
      })
    })
  })

  describe(`${COMMON_ACTION_TYPES.UPDATE_PAGINATION}`, () => {
    test('pagination が更新される', () => {
      const action: TCommonActions = {
        type: COMMON_ACTION_TYPES.UPDATE_PAGINATION,
        payload: paginationStateMock,
      }

      expect(commonReducer(initialCommonState, action)).toEqual({
        ...initialCommonState,
        pagination: action.payload,
      })
    })
  })

  describe(`${COMMON_ACTION_TYPES.UPDATE_SEO}`, () => {
    test('seo が更新される', () => {
      const action: TCommonActions = {
        type: COMMON_ACTION_TYPES.UPDATE_SEO,
        payload: seoStateMock,
      }

      expect(commonReducer(initialCommonState, action)).toEqual({
        ...initialCommonState,
        seo: action.payload,
      })
    })
  })
})
