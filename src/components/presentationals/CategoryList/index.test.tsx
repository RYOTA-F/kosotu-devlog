import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CategoryList, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('CategoryList', () => {
  beforeEach(() => {
    render(<CategoryList {...defaultProps} />)
  })

  test('描画される', () => {
    const categoryListElement = screen.getByLabelText(ARIA_LABEL)
    expect(categoryListElement).toBeInTheDocument()
  })
})
