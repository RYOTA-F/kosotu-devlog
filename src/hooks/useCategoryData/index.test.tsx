import React from 'react'
import { renderHook, act } from '@testing-library/react'

import useCategoryData from './'
import {
  initialCategoryState,
  ICategoryState,
  CATEGORY_ACTION_TYPES,
} from '@/stores/category'
import { categoryStateMock } from '@/stores/__mocks__/category/mock'

const dispatchMock = jest.fn()
jest.spyOn(React, 'useContext').mockImplementation(() => ({
  state: {
    ...initialCategoryState,
    category: categoryStateMock,
  } as ICategoryState,
  dispatch: dispatchMock,
}))

describe('useCategoryData', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('category', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useCategoryData())

      expect(result.current.category).toEqual(categoryStateMock)
    })
  })

  describe('setCategory', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCategoryData())
      act(() => result.current.setCategory(categoryStateMock))

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY,
        payload: categoryStateMock,
      })
    })
  })

  describe('resetCategory', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCategoryData())
      act(() => result.current.resetCategory())

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY,
        payload: initialCategoryState.category,
      })
    })
  })
})
