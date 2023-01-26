import { getBreadCrumbDataFromFixed } from '.'
import { fixedDataMock, resuldFixed } from './__mocks__'

describe('getBreadCrumbDataFromFixed', () => {
  test('パンくず情報を取得できる', () => {
    const result = getBreadCrumbDataFromFixed(fixedDataMock)
    expect(result).toEqual(resuldFixed)
  })
})
