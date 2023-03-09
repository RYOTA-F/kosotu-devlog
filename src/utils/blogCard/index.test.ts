import { getBlogCardDom } from '.'
import {
  blogCardDataMock,
  blogCardEmptyMock,
  resultHTML,
  resultEmptyHTML,
} from './__mocks__'

describe('getBlogCardDom', () => {
  describe('ブログカードのDOMが生成される', () => {
    test('blogCardData を渡した場合', () => {
      const result = getBlogCardDom(blogCardDataMock)
      expect(result).toEqual(resultHTML)
    })

    test('blogCardData データが空の場合', () => {
      const result = getBlogCardDom(blogCardEmptyMock)
      expect(result).toEqual(resultEmptyHTML)
    })
  })
})
