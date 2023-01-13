import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import PaginationItem, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('PaginationItem', () => {
  beforeEach(() => {
    render(<PaginationItem {...defaultProps} />)
  })

  test('描画される', () => {
    const paginationItemElement = screen.getByLabelText(ARIA_LABEL)
    expect(paginationItemElement).toBeInTheDocument()
  })
})
