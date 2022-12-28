import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { H4 } from '.'
import { ARIA_LABEL } from './const'
import { defaultProps } from './__mocks__'

describe('Heading', () => {
  beforeEach(() => {
    render(<H4>{defaultProps.children}</H4>)
  })

  describe('H4', () => {
    test('描画される', () => {
      const h4Element = screen.getByLabelText(ARIA_LABEL.H4)
      expect(h4Element).toBeInTheDocument()
    })
  })
})
