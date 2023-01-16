import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Sitemap, { ARIA_LABEL } from '.'
import SitemapContextProvider from '@/stores/__mocks__/sitemap'

describe('Sitemap', () => {
  beforeEach(() => {
    render(
      <SitemapContextProvider>
        <Sitemap />
      </SitemapContextProvider>
    )
  })

  test('描画される', () => {
    const sitemapElement = screen.getByLabelText(ARIA_LABEL)
    expect(sitemapElement).toBeInTheDocument()
  })
})
