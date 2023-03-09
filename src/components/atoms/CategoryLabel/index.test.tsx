import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CategoryLabel, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('CategoryLabel', () => {
  beforeEach(() => {
    render(<CategoryLabel {...defaultProps} />)
  })

  test('描画される', () => {
    const categoryLabelElement = screen.getByLabelText(ARIA_LABEL)
    expect(categoryLabelElement).toBeInTheDocument()
  })
})
