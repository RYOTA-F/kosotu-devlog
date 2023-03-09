import { getSeoFromTag } from '.'
import { tagDataMock, tagResultMock } from './__mocks__'

describe('getSeoFromTag', () => {
  test('SEO情報を取得できる', () => {
    const result = getSeoFromTag(tagDataMock)
    expect(result).toEqual(tagResultMock)
  })
})
