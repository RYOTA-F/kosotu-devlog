import React from 'react'
import { renderHook, act } from '@testing-library/react'

import useBlogData from './'
import { initialBlogState, IBlogState, BLOG_ACTION_TYPES } from '@/stores/blog'
import { blogsStateMock } from '@/stores/__mocks__/blog/mock'

const dispatchMock = jest.fn()
jest.spyOn(React, 'useContext').mockImplementation(() => ({
  state: {
    ...initialBlogState,
    blogs: blogsStateMock,
  } as IBlogState,
  dispatch: dispatchMock,
}))

describe('useBlogData', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('blog', () => {
    test('初期値がセットされている', () => {
      const { result } = renderHook(() => useBlogData())

      expect(result.current.blog).toEqual(blogsStateMock[0])
    })
  })

  describe('blogs', () => {
    test('初期値がセットされている', () => {
      const { result } = renderHook(() => useBlogData())

      expect(result.current.blogs).toEqual(blogsStateMock)
    })
  })

  describe('setBlogs', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useBlogData())
      act(() => result.current.setBlogs(blogsStateMock))

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: BLOG_ACTION_TYPES.UPDATE_BLOGS,
        payload: blogsStateMock,
      })
    })
  })

  describe('resetBlogs', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useBlogData())
      act(() => result.current.resetBlogs())

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: BLOG_ACTION_TYPES.UPDATE_BLOGS,
        payload: [],
      })
    })
  })
})
