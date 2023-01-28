import React from 'react'
import { renderHook } from '@testing-library/react'

import useMediaQuery from '.'

describe('useMediaQuery', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('isPC', () => {
    test.each`
      isPcMock
      ${true}
      ${false}
    `('$isPcMock が返る', ({ isPcMock }: { isPcMock: boolean }) => {
      jest.spyOn(React, 'useContext').mockImplementation(() => ({
        isPC: isPcMock,
        isTB: false,
        isSP: false,
      }))
      const { result } = renderHook(() => useMediaQuery())

      expect(result.current.isPC).toEqual(isPcMock)
    })
  })

  describe('isTB', () => {
    test.each`
      isTbMock
      ${true}
      ${false}
    `('$isTbMock が返る', ({ isTbMock }: { isTbMock: boolean }) => {
      jest.spyOn(React, 'useContext').mockImplementation(() => ({
        isPC: false,
        isTB: isTbMock,
        isSP: false,
      }))
      const { result } = renderHook(() => useMediaQuery())

      expect(result.current.isTB).toEqual(isTbMock)
    })
  })

  describe('isSP', () => {
    test.each`
      isSpMock
      ${true}
      ${false}
    `('$isSpMock が返る', ({ isSpMock }: { isSpMock: boolean }) => {
      jest.spyOn(React, 'useContext').mockImplementation(() => ({
        isPC: false,
        isTB: false,
        isSP: isSpMock,
      }))
      const { result } = renderHook(() => useMediaQuery())

      expect(result.current.isSP).toEqual(isSpMock)
    })
  })
})
