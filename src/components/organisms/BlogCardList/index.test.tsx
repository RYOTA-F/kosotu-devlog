import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogCardList, { ARIA_LABEL } from '.'
import { ARIA_LABEL as BLOG_CARD_ARIA_LABEL } from '@/components/molecules/BlogCard'
import BlogContextProviderMock from '@/stores/__mocks__/blog'
import { blogsStateMock } from '@/stores/__mocks__/blog/mock'

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

  describe('BlogCard', () => {
    test('blog の数だけ描画される', () => {
      const blogCardElements = screen.getAllByLabelText(
        BLOG_CARD_ARIA_LABEL.BLOG_CARD
      )

      expect(blogCardElements.length).toEqual(blogsStateMock.length)
      blogCardElements.forEach((element) => expect(element).toBeInTheDocument())
    })
  })
})
