import React from 'react'
import { renderHook, act } from '@testing-library/react'

import useCommonData from './'
import {
  initialCommonState,
  ICommonState,
  COMMON_ACTION_TYPES,
} from '@/stores/common'
import {
  tableOfContentsStateMock,
  paginationStateMock,
} from '@/stores/__mocks__/common/mock'
import { defaultProps as breadCrumbStateMock } from '@/components/molecules/BreadCrumb/__mocks__'

const dispatchMock = jest.fn()
jest.spyOn(React, 'useContext').mockImplementation(() => ({
  state: {
    ...initialCommonState,
    breadClumb: breadCrumbStateMock.breadCrumb,
    tableOfContents: tableOfContentsStateMock,
    pagination: paginationStateMock,
  } as ICommonState,
  dispatch: dispatchMock,
}))

describe('useCommonData', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('breadCrumb', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useCommonData())

      expect(result.current.breadCrumb).toEqual(breadCrumbStateMock.breadCrumb)
    })
  })

  describe('tableOfContents', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useCommonData())

      expect(result.current.tableOfContents).toEqual(tableOfContentsStateMock)
    })
  })

  describe('currentPage', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useCommonData())

      expect(result.current.currentPage).toEqual(
        paginationStateMock.currentPage
      )
    })
  })

  describe('totalPage', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useCommonData())

      expect(result.current.totalPage).toEqual(paginationStateMock.totalPage)
    })
  })

  describe('paginationType', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useCommonData())

      expect(result.current.paginationType).toEqual(paginationStateMock.type)
    })
  })

  describe('seoTitle', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useCommonData())

      expect(result.current.seoTitle).toEqual(initialCommonState.seo.title)
    })
  })

  describe('seoDescription', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useCommonData())

      expect(result.current.seoDescription).toEqual(
        initialCommonState.seo.description
      )
    })
  })

  describe('seoUrl', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useCommonData())

      expect(result.current.seoUrl).toEqual(initialCommonState.seo.url)
    })
  })

  describe('seoImage', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useCommonData())

      expect(result.current.seoImage).toEqual(initialCommonState.seo.image)
    })
  })

  describe('setBreadCrumb', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCommonData())
      act(() => result.current.setBreadCrumb(breadCrumbStateMock.breadCrumb))

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: COMMON_ACTION_TYPES.UPDATE_BREAD_CRUMB,
        payload: breadCrumbStateMock.breadCrumb,
      })
    })
  })

  describe('resetBreadCrumb', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCommonData())
      act(() => result.current.resetBreadCrumb())

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: COMMON_ACTION_TYPES.UPDATE_BREAD_CRUMB,
        payload: undefined,
      })
    })
  })

  describe('setTableOfContents', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCommonData())
      act(() => result.current.setTableOfContents(tableOfContentsStateMock))

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: COMMON_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS,
        payload: tableOfContentsStateMock,
      })
    })
  })

  describe('resetTableOfContents', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCommonData())
      act(() => result.current.resetTableOfContents())

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: COMMON_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS,
        payload: [],
      })
    })
  })

  describe('setPagination', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCommonData())
      act(() => result.current.setPagination(paginationStateMock))

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: COMMON_ACTION_TYPES.UPDATE_PAGINATION,
        payload: paginationStateMock,
      })
    })
  })

  describe('resetPagination', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCommonData())
      act(() => result.current.resetPagination())

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: COMMON_ACTION_TYPES.UPDATE_PAGINATION,
        payload: initialCommonState.pagination,
      })
    })
  })

  describe('setSeo', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCommonData())
      act(() => result.current.setSeo(initialCommonState.seo))

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: COMMON_ACTION_TYPES.UPDATE_SEO,
        payload: initialCommonState.seo,
      })
    })
  })

  describe('resetSeo', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useCommonData())
      act(() => result.current.resetSeo())

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: COMMON_ACTION_TYPES.UPDATE_SEO,
        payload: initialCommonState.seo,
      })
    })
  })
})
