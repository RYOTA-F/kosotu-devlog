import React from 'react'
import { renderHook, act } from '@testing-library/react'

import useBlogData from './'
import { initialBlogState, IBlogState, BLOG_ACTION_TYPES } from '@/stores/blog'
import { blogsMock } from '@/logic/usecase/microCMS/blog/__mocks__'

const dispatchMock = jest.fn()
jest.spyOn(React, 'useContext').mockImplementation(() => ({
  state: {
    ...initialBlogState,
    blogs: blogsMock,
  } as IBlogState,
  dispatch: dispatchMock,
}))

describe('useBlogData', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('blog', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useBlogData())

      expect(result.current.blog).toEqual(blogsMock[0])
    })
  })

  describe('blogs', () => {
    test('state のデータがセットされる', () => {
      const { result } = renderHook(() => useBlogData())

      expect(result.current.blogs).toEqual(blogsMock)
    })
  })

  describe('setBlogs', () => {
    test('dispatch に適切な引数が渡される', () => {
      const { result } = renderHook(() => useBlogData())
      act(() => result.current.setBlogs(blogsMock))

      expect(dispatchMock).toBeCalled()
      expect(dispatchMock).toBeCalledWith({
        type: BLOG_ACTION_TYPES.UPDATE_BLOGS,
        payload: blogsMock,
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
