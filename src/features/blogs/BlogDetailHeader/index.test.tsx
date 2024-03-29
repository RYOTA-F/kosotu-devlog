import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogDetailHeader, { ARIA_LABEL } from '.'
import { ARIA_LABEL as CATEGORY_LIST_ARIA_LABEL } from '@/features/categories/CategoryList'
import { ARIA_LABEL as TAG_LIST_ARIA_LABEL } from '@/features/tags/TagList'
import { ARIA_LABEL as TABLE_OF_CONTENTS_ARIA_LABEL } from '@/components/TableOfContents'
import RootContextProvider from '@/stores/__mocks__'

describe('BlogDetailHeader', () => {
  beforeEach(() => {
    render(
      <RootContextProvider>
        <BlogDetailHeader />
      </RootContextProvider>
    )
  })

  test('描画される', () => {
    const blogDetailHeaderElement = screen.getByLabelText(ARIA_LABEL)
    expect(blogDetailHeaderElement).toBeInTheDocument()
  })

  describe('CategoryList', () => {
    test('描画される', () => {
      const categoryListElement = screen.getByLabelText(
        CATEGORY_LIST_ARIA_LABEL
      )
      expect(categoryListElement).toBeInTheDocument()
    })
  })

  describe('TagList', () => {
    test('描画される', () => {
      const tagListElement = screen.getByLabelText(TAG_LIST_ARIA_LABEL)
      expect(tagListElement).toBeInTheDocument()
    })
  })

  describe('TableOfContents', () => {
    test('描画される', () => {
      const tableOfContentsElement = screen.getByLabelText(
        TABLE_OF_CONTENTS_ARIA_LABEL
      )
      expect(tableOfContentsElement).toBeInTheDocument()
    })
  })
})
