import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import DisclaimerDetail, { ARIA_LABEL } from '.'

describe('DisclaimerDetail', () => {
  beforeEach(() => {
    render(<DisclaimerDetail />)
  })

  test('描画される', () => {
    const disclaimerElement = screen.getByLabelText(
      ARIA_LABEL.DISCLAIMER_DETAIL
    )
    expect(disclaimerElement).toBeInTheDocument()
  })
})
