import { getBlogCardDom } from '.'
import { blogCardDataMock, resultHTML } from './__mocks__'

describe('getBlogCardDom', () => {
  test('ブログカードのDOMが生成される', () => {
    const result = getBlogCardDom(blogCardDataMock)
    expect(result).toEqual(resultHTML)
  })
})
