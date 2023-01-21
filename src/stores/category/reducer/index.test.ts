import {
  categoryReducer,
  initialCategoryState,
  CATEGORY_ACTION_TYPES,
  TCategoryActions,
} from '../'
import { categoryStateMock } from '@/stores/__mocks__/category/mock'

describe('categoryReducer', () => {
  describe(`${CATEGORY_ACTION_TYPES.UPDATE_CATEGORY}`, () => {
    test('category が更新される', () => {
      const action: TCategoryActions = {
        type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY,
        payload: categoryStateMock,
      }

      expect(categoryReducer(initialCategoryState, action)).toEqual({
        ...initialCategoryState,
        category: action.payload,
      })
    })
  })
})
