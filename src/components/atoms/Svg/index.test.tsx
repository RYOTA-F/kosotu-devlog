import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { TimeSvg, TIME_SVG_ARIA_LABEL, ListSvg, LIST_SVG_ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('Svg', () => {
  describe('TimeSvg', () => {
    test('描画される', () => {
      render(<TimeSvg {...defaultProps} />)

      const timeSvgElement = screen.getByLabelText(TIME_SVG_ARIA_LABEL)
      expect(timeSvgElement).toBeInTheDocument()
    })
  })

  describe('ListSvg', () => {
    test('描画される', () => {
      render(<ListSvg {...defaultProps} />)

      const listSvgElement = screen.getByLabelText(LIST_SVG_ARIA_LABEL)
      expect(listSvgElement).toBeInTheDocument()
    })
  })
})
