import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import PageNotFound, { ARIA_LABEL } from '.'

describe('PageNotFound', () => {
  beforeEach(() => {
    render(<PageNotFound />)
  })

  test('描画される', () => {
    const pageNotFoundElement = screen.getByLabelText(ARIA_LABEL.PAGE_NOT_FOUND)
    expect(pageNotFoundElement).toBeInTheDocument()
  })
})
