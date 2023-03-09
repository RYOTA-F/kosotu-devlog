import {
  categoryReducer,
  initialCategoryState,
  CATEGORY_ACTION_TYPES,
  TCategoryActions,
} from '../'
import { categoriesMock } from '@/logic/usecase/microCMS/category/__mocks__'

describe('categoryReducer', () => {
  describe(`${CATEGORY_ACTION_TYPES.UPDATE_CATEGORY}`, () => {
    test('category が更新される', () => {
      const action: TCategoryActions = {
        type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY,
        payload: categoriesMock[0],
      }

      expect(categoryReducer(initialCategoryState, action)).toEqual({
        ...initialCategoryState,
        category: action.payload,
      })
    })
  })
})
