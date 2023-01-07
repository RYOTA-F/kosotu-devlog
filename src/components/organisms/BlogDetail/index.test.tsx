import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogDetail, { ARIA_LABEL } from '.'
import { ARIA_LABEL as BLOG_DETAIL_HEADER_ARIA_LABEL } from '@/components/organisms/BlogDetailHeader'
import { ARIA_LABEL as BLOG_BODY_ARIA_LABEL } from '@/components/organisms/BlogBody'
import BlogContextProviderMock from '@/stores/__mocks__/blog'

describe('BlogDetail', () => {
  beforeEach(() => {
    render(
      <BlogContextProviderMock>
        <BlogDetail />
      </BlogContextProviderMock>
    )
  })

  test('描画される', () => {
    const blogDetailElement = screen.getByLabelText(ARIA_LABEL.BLOG_DETAIL)
    expect(blogDetailElement).toBeInTheDocument()
  })

  describe('BlogDetailHeader', () => {
    test('描画される', () => {
      const blogDetailHeaderElement = screen.getByLabelText(
        BLOG_DETAIL_HEADER_ARIA_LABEL.BLOG_DETAIL_HEADER
      )
      expect(blogDetailHeaderElement).toBeInTheDocument()
    })
  })

  describe('BlogBody', () => {
    test('描画される', () => {
      const blogBodyElement = screen.getByLabelText(BLOG_BODY_ARIA_LABEL)
      expect(blogBodyElement).toBeInTheDocument()
    })
  })
})
