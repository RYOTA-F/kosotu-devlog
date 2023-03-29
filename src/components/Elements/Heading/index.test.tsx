import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { H1, H2, H3 } from '.'
import { ARIA_LABEL } from './const'
import { defaultProps } from './__mocks__'

describe('Heading', () => {
  describe('H1', () => {
    test('描画される', () => {
      render(<H1>{defaultProps}</H1>)
      const h1Element = screen.getByLabelText(ARIA_LABEL.H1)
      expect(h1Element).toBeInTheDocument()
    })

    test.todo('children が描画される')
  })

  describe('H2', () => {
    test('描画される', () => {
      render(<H2>{defaultProps}</H2>)
      const h2Element = screen.getByLabelText(ARIA_LABEL.H2)
      expect(h2Element).toBeInTheDocument()
    })

    test.todo('children が描画される')
  })

  describe('H3', () => {
    test('描画される', () => {
      render(<H3>{defaultProps}</H3>)
      const h3Element = screen.getByLabelText(ARIA_LABEL.H3)
      expect(h3Element).toBeInTheDocument()
    })

    test.todo('children が描画される')
  })
})
