import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogDetailHeader, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('BlogDetailHeader', () => {
  beforeEach(() => {
    render(<BlogDetailHeader {...defaultProps} />)
  })

  test('描画される', () => {
    const blogDetailHeaderElement = screen.getByLabelText(
      ARIA_LABEL.BLOG_DETAIL_HEADER
    )
    expect(blogDetailHeaderElement).toBeInTheDocument()
  })
})
