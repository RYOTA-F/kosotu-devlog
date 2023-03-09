import { tagReducer, initialTagState, TAG_ACTION_TYPES, TTagActions } from '../'
import { tagsMock } from '@/logic/usecase/microCMS/tag/__mocks__'

describe('tagReducer', () => {
  describe(`${TAG_ACTION_TYPES.UPDATE_TAG}`, () => {
    test('tag が更新される', () => {
      const action: TTagActions = {
        type: TAG_ACTION_TYPES.UPDATE_TAG,
        payload: tagsMock[0],
      }

      expect(tagReducer(initialTagState, action)).toEqual({
        ...initialTagState,
        tag: action.payload,
      })
    })
  })
})
