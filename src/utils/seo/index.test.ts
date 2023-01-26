import { type TFixedPage } from '@/const/index'
import { getSeoFromFixed } from '.'
import { fixedResultMock, type TSeo } from './__mocks__'

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
