import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogCardList, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('BlogCardList', () => {
  beforeEach(() => {
    render(<BlogCardList {...defaultProps} />)
  })

  test('描画される', () => {
    const blogCardListElement = screen.getByLabelText(ARIA_LABEL.BLOG_CARD_LIST)
    expect(blogCardListElement).toBeInTheDocument()
  })
})
