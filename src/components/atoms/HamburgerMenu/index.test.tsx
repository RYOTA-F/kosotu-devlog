import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import HamburgerMenu, { ARIA_LABEL } from '.'

describe('HamburgerMenu', () => {
  beforeEach(() => {
    render(<HamburgerMenu />)
  })

  test('描画される', () => {
    const hamburgerMenuElement = screen.getByLabelText(ARIA_LABEL)
    expect(hamburgerMenuElement).toBeInTheDocument()
  })
})
