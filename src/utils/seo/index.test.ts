import { type TFixedPage } from '@/const/index'
import {
  getSeoFromBlog,
  getSeoFromCategory,
  getSeoFromTag,
  getSeoFromFixed,
} from '.'
import {
  blogDataMock,
  blogResultMock,
  categoryDataMock,
  categoryResultMock,
  tagDataMock,
  tagResultMock,
  fixedResultMock,
  type TSeo,
} from './__mocks__'

describe('getSeoFromBlog', () => {
  test('SEO情報を取得できる', () => {
    const result = getSeoFromBlog(blogDataMock)
    expect(result).toEqual(blogResultMock)
  })
})

describe('getSeoFromCategory', () => {
  test('SEO情報を取得できる', () => {
    const result = getSeoFromCategory(categoryDataMock)
    expect(result).toEqual(categoryResultMock)
  })
})

describe('getSeoFromTag', () => {
  test('SEO情報を取得できる', () => {
    const result = getSeoFromTag(tagDataMock)
    expect(result).toEqual(tagResultMock)
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