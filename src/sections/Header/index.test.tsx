import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header, { ARIA_LABEL } from './'

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  test('描画される', () => {
    const headerElement = screen.getByLabelText(ARIA_LABEL.HEADER)
    expect(headerElement).toBeInTheDocument()
  })
})
