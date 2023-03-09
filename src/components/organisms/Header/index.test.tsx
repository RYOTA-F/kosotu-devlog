import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header, { ARIA_LABEL } from '.'
import { MediaQueryContext } from '@/stores/mediaQuery'

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('PC', () => {
    test('描画される', () => {
      render(
        <MediaQueryContext.Provider
          value={{ isPC: true, isTB: false, isSP: false }}
        >
          <Header />
        </MediaQueryContext.Provider>
      )

      const headerElement = screen.getByLabelText(ARIA_LABEL.HEADER)
      expect(headerElement).toBeInTheDocument()
    })
  })

  describe('TB', () => {
    test('描画される', () => {
      render(
        <MediaQueryContext.Provider
          value={{ isPC: false, isTB: true, isSP: false }}
        >
          <Header />
        </MediaQueryContext.Provider>
      )

      const headerElement = screen.getByLabelText(ARIA_LABEL.HEADER)
      expect(headerElement).toBeInTheDocument()
    })
  })

  describe('SP', () => {
    test('描画される', () => {
      render(
        <MediaQueryContext.Provider
          value={{ isPC: false, isTB: false, isSP: true }}
        >
          <Header />
        </MediaQueryContext.Provider>
      )

      const headerElement = screen.getByLabelText(ARIA_LABEL.HEADER)
      expect(headerElement).toBeInTheDocument()
    })
  })
})
