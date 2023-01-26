import { getBreadCrumbDataFromTag } from '.'
import { tagDataMock, resuldTagMock } from './__mocks__'

describe('getBreadCrumbDataFromTag', () => {
  test('パンくず情報を取得できる', () => {
    const result = getBreadCrumbDataFromTag(tagDataMock)
    expect(result).toEqual(resuldTagMock)
  })
})
