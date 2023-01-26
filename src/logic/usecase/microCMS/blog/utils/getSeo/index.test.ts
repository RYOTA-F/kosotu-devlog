import { getSeoFromBlog } from '.'
import { blogDataMock, blogResultMock } from './__mocks__'

describe('getSeoFromBlog', () => {
  test('SEO情報を取得できる', () => {
    const result = getSeoFromBlog(blogDataMock)
    expect(result).toEqual(blogResultMock)
  })
})
