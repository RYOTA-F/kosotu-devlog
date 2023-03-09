import {
  blogReducer,
  initialBlogState,
  BLOG_ACTION_TYPES,
  TBlogActions,
} from '../'
import { blogsMock } from '@/logic/usecase/microCMS/blog/__mocks__'

describe('blogReducer', () => {
  describe(`${BLOG_ACTION_TYPES.UPDATE_BLOGS}`, () => {
    test('blogs が更新される', () => {
      const action: TBlogActions = {
        type: BLOG_ACTION_TYPES.UPDATE_BLOGS,
        payload: blogsMock,
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
        payload: blogsMock.length,
      }

      expect(blogReducer(initialBlogState, action)).toEqual({
        ...initialBlogState,
        totalCount: blogsMock.length,
      })
    })
  })
})
