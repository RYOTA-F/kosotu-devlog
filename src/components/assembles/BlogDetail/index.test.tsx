import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogDetail, { ARIA_LABEL } from '.'
import { defaultProps } from '@/components/assembles/BlogCardList/__mocks__'

describe('BlogDetail', () => {
  beforeEach(() => {
    render(<BlogDetail {...defaultProps.contents[0]} />)
  })

  test('描画される', () => {
    const blogDetailElement = screen.getByLabelText(ARIA_LABEL.BLOG_DETAIL)
    expect(blogDetailElement).toBeInTheDocument()
  })
})
