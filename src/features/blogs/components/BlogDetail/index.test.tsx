import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogDetail, { ARIA_LABEL } from '.'
import { ARIA_LABEL as BLOG_BODY_ARIA_LABEL } from '@/features/blogs/components/BlogBody'
import { ARIA_LABEL as BLOG_DETAIL_HEADER_ARIA_LABEL } from '@/features/blogs/components/BlogDetailHeader'
import RootContextProvider from '@/stores/__mocks__'

describe('BlogDetail', () => {
  beforeEach(() => {
    render(
      <RootContextProvider>
        <BlogDetail />
      </RootContextProvider>
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
