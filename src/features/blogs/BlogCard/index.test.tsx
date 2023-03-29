import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogCard, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('BlogCard', () => {
  beforeEach(() => {
    render(<BlogCard {...defaultProps} />)
  })

  test('描画される', () => {
    const blogCardElement = screen.getByLabelText(ARIA_LABEL)
    expect(blogCardElement).toBeInTheDocument()
  })

  test.todo('クリック遷移')
})
