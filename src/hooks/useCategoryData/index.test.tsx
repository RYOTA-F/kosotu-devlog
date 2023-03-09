import React from 'react'
import { renderHook, act } from '@testing-library/react'

import useCategoryData from './'
import {
  initialCategoryState,
  ICategoryState,
  CATEGORY_ACTION_TYPES,
} from '@/stores/category'
import { categoriesMock } from '@/logic/usecase/microCMS/category/__mocks__'

const dispatchMock = jest.fn()
jest.spyOn(React, 'useContext').mockImplementation(() => ({
  state: {
    ...initialCategoryState,
    category: categoriesMock[0],
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

      expect(result.current.category).toEqual(categoriesMock[0])
    })
  })

  describe('setCategory', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCategoryData())
      act(() => result.current.setCategory(categoriesMock[0]))

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: CATEGORY_ACTION_TYPES.UPDATE_CATEGORY,
        payload: categoriesMock[0],
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
