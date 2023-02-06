import React from 'react'
import { renderHook, act } from '@testing-library/react'

import useTagData from './'
import { initialTagState, ITagState, TAG_ACTION_TYPES } from '@/stores/tag'
import { tagsMock } from '@/logic/usecase/microCMS/tag/__mocks__'

const dispatchMock = jest.fn()
jest.spyOn(React, 'useContext').mockImplementation(() => ({
  state: {
    ...initialTagState,
    tag: tagsMock[0],
  } as ITagState,
  dispatch: dispatchMock,
}))

describe('useTagData', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('tag', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useTagData())

      expect(result.current.tag).toEqual(tagsMock[0])
    })
  })

  describe('setTag', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useTagData())
      act(() => result.current.setTag(tagsMock[0]))

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: TAG_ACTION_TYPES.UPDATE_TAG,
        payload: tagsMock[0],
      })
    })
  })

  describe('resetTag', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useTagData())
      act(() => result.current.resetTag())

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: TAG_ACTION_TYPES.UPDATE_TAG,
        payload: initialTagState.tag,
      })
    })
  })
})
