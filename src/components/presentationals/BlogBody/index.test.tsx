import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogBody, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('BlogBody', () => {
  beforeEach(() => {
    render(<BlogBody {...defaultProps} />)
  })

  test('描画される', () => {
    const blogBodyElement = screen.getByLabelText(ARIA_LABEL)
    expect(blogBodyElement).toBeInTheDocument()
  })
})
