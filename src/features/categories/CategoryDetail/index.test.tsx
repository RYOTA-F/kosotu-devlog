import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CategoryDetail, { ARIA_LABEL } from '.'
import { ARIA_LABEL as BLOG_CARD_LIST_ARIA_LABEL } from '@/features/blogs/BlogCardList'
import { ARIA_LABEL as CATEGORY_DETAIL_HEADER_ARIA_LABEL } from '@/features/categories/CategoryDetailHeader'
import RootContextProvider from '@/stores/__mocks__'

describe('CategoryDetail', () => {
  beforeEach(() => {
    render(
      <RootContextProvider>
        <CategoryDetail />
      </RootContextProvider>
    )
  })

  test('描画される', () => {
    const categoryDetailElement = screen.getByLabelText(
      ARIA_LABEL.CATEGORY_DETAIL
    )
    expect(categoryDetailElement).toBeInTheDocument()
  })

  describe('CategoryDetailHeader', () => {
    test('描画される', () => {
      const categoryDetailHeaderElement = screen.getByLabelText(
        CATEGORY_DETAIL_HEADER_ARIA_LABEL.CATEGORY_DETAIL_HEADER
      )
      expect(categoryDetailHeaderElement).toBeInTheDocument()
    })
  })

  describe('BlogCardList', () => {
    test('描画される', () => {
      const blogCardListElement = screen.getByLabelText(
        BLOG_CARD_LIST_ARIA_LABEL
      )
      expect(blogCardListElement).toBeInTheDocument()
    })
  })
})
