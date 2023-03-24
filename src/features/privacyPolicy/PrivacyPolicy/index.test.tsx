import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import PrivacyPolicy, { ARIA_LABEL } from '.'

describe('PrivacyPolicy', () => {
  beforeEach(() => {
    render(<PrivacyPolicy />)
  })

  test('描画される', () => {
    const privacyPolicyElement = screen.getByLabelText(
      ARIA_LABEL.PRIVACY_POLICY
    )
    expect(privacyPolicyElement).toBeInTheDocument()
  })
})
