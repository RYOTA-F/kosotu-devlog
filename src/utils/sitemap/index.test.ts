import { createSitemapData } from '.'
import { blogsDataMock, categoryDataMock, resultMock } from './__mocks__'

describe('createSitemapData', () => {
  test('サイトマップ情報を取得できる', () => {
    const result = createSitemapData(blogsDataMock, categoryDataMock)
    expect(result).toEqual(resultMock)
  })
})
