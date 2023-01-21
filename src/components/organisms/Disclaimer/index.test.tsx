import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Disclaimer, { ARIA_LABEL } from '.'

describe('Disclaimer', () => {
  beforeEach(() => {
    render(<Disclaimer />)
  })

  test('描画される', () => {
    const disclaimerElement = screen.getByLabelText(ARIA_LABEL.DISCLAIMER)
    expect(disclaimerElement).toBeInTheDocument()
  })
})
