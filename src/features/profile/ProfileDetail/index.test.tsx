import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ProfileDetail, { ARIA_LABEL } from '.'

describe('ProfileDetail', () => {
  beforeEach(() => {
    render(<ProfileDetail />)
  })

  test('描画される', () => {
    const profileElement = screen.getByLabelText(ARIA_LABEL.PROFILE_DETAIL)
    expect(profileElement).toBeInTheDocument()
  })
})
