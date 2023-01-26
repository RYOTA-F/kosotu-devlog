import { getSeoFromCategory } from '.'
import { categoryDataMock, categoryResultMock } from './__mocks__'

describe('getSeoFromCategory', () => {
  test('SEO情報を取得できる', () => {
    const result = getSeoFromCategory(categoryDataMock)
    expect(result).toEqual(categoryResultMock)
  })
})
