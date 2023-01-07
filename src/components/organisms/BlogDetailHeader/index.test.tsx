import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogDetailHeader, { ARIA_LABEL } from '.'
import { ARIA_LABEL as CATEGORY_LIST_ARIA_LABEL } from '@/components/molecules/CategoryList'
import { ARIA_LABEL as TAG_LIST_ARIA_LABEL } from '@/components/molecules/TagList'
import { ARIA_LABEL as TABLE_OF_CONTENTS_ARIA_LABEL } from '@/components/molecules/TableOfContents'
import BlogContextProviderMock from '@/stores/__mocks__/blog'
import CommonContextProviderMock from '@/stores/__mocks__/common'

describe('BlogDetailHeader', () => {
  beforeEach(() => {
    render(
      <CommonContextProviderMock>
        <BlogContextProviderMock>
          <BlogDetailHeader />
        </BlogContextProviderMock>
      </CommonContextProviderMock>
    )
  })

  test('描画される', () => {
    const blogDetailHeaderElement = screen.getByLabelText(
      ARIA_LABEL.BLOG_DETAIL_HEADER
    )
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
