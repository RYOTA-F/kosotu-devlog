import { tagReducer, initialTagState, TAG_ACTION_TYPES, TTagActions } from '../'
import { tagStateMock } from '@/stores/__mocks__/tag/mock'

describe('tagReducer', () => {
  test(`アクションが ${TAG_ACTION_TYPES.UPDATE_TAG} のとき tag が更新される`, () => {
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
