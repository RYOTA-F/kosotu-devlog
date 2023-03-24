import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import SitemapItem, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('SitemapItem', () => {
  beforeEach(() => {
    render(<SitemapItem {...defaultProps} />)
  })

  test('描画される', () => {
    const sitemapItemElement = screen.getByLabelText(ARIA_LABEL)
    expect(sitemapItemElement).toBeInTheDocument()
  })
})
