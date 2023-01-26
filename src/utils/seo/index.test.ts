import { type TFixedPage } from '@/const/index'
import { getSeoFromCategory, getSeoFromFixed } from '.'
import {
  categoryDataMock,
  categoryResultMock,
  fixedResultMock,
  type TSeo,
} from './__mocks__'

describe('getSeoFromCategory', () => {
  test('SEO情報を取得できる', () => {
    const result = getSeoFromCategory(categoryDataMock)
    expect(result).toEqual(categoryResultMock)
  })
})

describe('getSeoFromFixed', () => {
  test.each`
    pageType            | resultMock
    ${'profile'}        | ${fixedResultMock.profile}
    ${'sitemap'}        | ${fixedResultMock.sitemap}
    ${'privacy-policy'} | ${fixedResultMock.privacyPolicy}
    ${'disclaimer'}     | ${fixedResultMock.disclaimer}
    ${'hoge'}           | ${fixedResultMock.default}
  `(
    'pageType が $pageType のとき SEO情報が取得できる',
    ({ pageType, resultMock }: { pageType: TFixedPage; resultMock: TSeo }) => {
      const result = getSeoFromFixed(pageType)
      expect(result).toEqual(resultMock)
    }
  )
})
