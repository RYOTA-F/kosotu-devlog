import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Profile, { ARIA_LABEL } from '.'

describe('Profile', () => {
  beforeEach(() => {
    render(<Profile />)
  })

  test('描画される', () => {
    const profileElement = screen.getByLabelText(ARIA_LABEL.PROFILE)
    expect(profileElement).toBeInTheDocument()
  })

  test.todo('Image クリック')
  test.todo('Button クリック')
  test.todo('TwitterSvg クリック')
})
