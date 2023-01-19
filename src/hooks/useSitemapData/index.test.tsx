import React from 'react'
import { renderHook, act } from '@testing-library/react'

import useSitemapData from './'
import {
  initialSitemapState,
  ISitemapState,
  SITEMAP_ACTION_TYPES,
} from '@/stores/sitemap'
import { sitemapStateMock } from '@/stores/__mocks__/sitemap/mock'

const dispatchMock = jest.fn()
jest.spyOn(React, 'useContext').mockImplementation(() => ({
  state: {
    ...initialSitemapState,
    sitemap: sitemapStateMock,
  } as ISitemapState,
  dispatch: dispatchMock,
}))

describe('useSitemapData', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('sitemap', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useSitemapData())

      expect(result.current.sitemap).toEqual(sitemapStateMock)
    })
  })

  describe('setSitemap', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useSitemapData())
      act(() => result.current.setSitemap(sitemapStateMock))

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: SITEMAP_ACTION_TYPES.UPDATE_SITEMAP,
        payload: sitemapStateMock,
      })
    })
  })

  describe('resetSitemap', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useSitemapData())
      act(() => result.current.resetSitemap())

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: SITEMAP_ACTION_TYPES.UPDATE_SITEMAP,
        payload: [],
      })
    })
  })
})
