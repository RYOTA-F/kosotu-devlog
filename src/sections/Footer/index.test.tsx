import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Footer, { ARIA_LABEL } from './'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  test('描画される', () => {
    const footerElement = screen.getByLabelText(ARIA_LABEL.FOOTER)
    expect(footerElement).toBeInTheDocument()
  })
})
