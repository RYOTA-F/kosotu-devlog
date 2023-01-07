import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogCardList, { ARIA_LABEL } from '.'
import BlogContextProviderMock from '@/stores/__mocks__/blog'

describe('BlogCardList', () => {
  beforeEach(() => {
    render(
      <BlogContextProviderMock>
        <BlogCardList />
      </BlogContextProviderMock>
    )
  })

  test('描画される', () => {
    const blogCardListElement = screen.getByLabelText(ARIA_LABEL.BLOG_CARD_LIST)
    expect(blogCardListElement).toBeInTheDocument()
  })

  test.todo('ブログの数だけ BlogCard が描画される')
})
