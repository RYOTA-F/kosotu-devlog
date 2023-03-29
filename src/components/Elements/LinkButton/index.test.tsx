import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import LinkButton, { ILinkButton, ARIA_LABEL } from '.'

describe('LinkButton', () => {
  const defaultProps: ILinkButton = {
    href: '/profile',
    children: 'プロフィール',
  }

  beforeEach(() => {
    render(<LinkButton {...defaultProps} />)
  })

  test('描画される', () => {
    const LinkbuttonElement = screen.getByLabelText(ARIA_LABEL.LINK_BUTTON)
    expect(LinkbuttonElement).toBeInTheDocument()
  })
})
