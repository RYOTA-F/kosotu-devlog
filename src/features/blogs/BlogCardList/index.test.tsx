import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogCardList, { ARIA_LABEL } from '.'
import { ARIA_LABEL as BLOG_CARD_ARIA_LABEL } from '@/features/blogs/BlogCard'
import BlogContextProviderMock from '@/stores/__mocks__/blog'
import { blogsMock } from '@/logic/usecase/microCMS/blog/__mocks__'

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

      expect(blogCardElements.length).toEqual(blogsMock.length)
      blogCardElements.forEach((element) => expect(element).toBeInTheDocument())
    })
  })
})
