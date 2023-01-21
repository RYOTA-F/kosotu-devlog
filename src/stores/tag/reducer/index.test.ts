import { tagReducer, initialTagState, TAG_ACTION_TYPES, TTagActions } from '../'
import { tagStateMock } from '@/stores/__mocks__/tag/mock'

describe('tagReducer', () => {
  describe(`${TAG_ACTION_TYPES.UPDATE_TAG}`, () => {
    test('tag が更新される', () => {
      const action: TTagActions = {
        type: TAG_ACTION_TYPES.UPDATE_TAG,
        payload: tagStateMock,
      }

      expect(tagReducer(initialTagState, action)).toEqual({
        ...initialTagState,
        tag: action.payload,
      })
    })
  })
})
