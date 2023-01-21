import {
  blogReducer,
  initialBlogState,
  BLOG_ACTION_TYPES,
  TBlogActions,
} from '../'
import { blogsStateMock } from '@/stores/__mocks__/blog/mock'

describe('blogReducer', () => {
  describe(`${BLOG_ACTION_TYPES.UPDATE_BLOGS}`, () => {
    test('blogs が更新される', () => {
      const action: TBlogActions = {
        type: BLOG_ACTION_TYPES.UPDATE_BLOGS,
        payload: blogsStateMock,
      }

      expect(blogReducer(initialBlogState, action)).toEqual({
        ...initialBlogState,
        blogs: action.payload,
      })
    })
  })

  describe(`${BLOG_ACTION_TYPES.UPDATE_TOTAL_COUNT}`, () => {
    test('totalCount が更新される', () => {
      const action: TBlogActions = {
        type: BLOG_ACTION_TYPES.UPDATE_TOTAL_COUNT,
        payload: blogsStateMock.length,
      }

      expect(blogReducer(initialBlogState, action)).toEqual({
        ...initialBlogState,
        totalCount: blogsStateMock.length,
      })
    })
  })
})
