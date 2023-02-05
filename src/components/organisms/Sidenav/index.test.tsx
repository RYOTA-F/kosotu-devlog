import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Sidenav, { ARIA_LABEL } from '.'

describe('Sidenav', () => {
  beforeEach(() => {
    render(<Sidenav />)
  })

  test('描画される', () => {
    const sidenavElement = screen.getByLabelText(ARIA_LABEL)
    expect(sidenavElement).toBeInTheDocument()
  })
})
