import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Label, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('Label', () => {
  beforeEach(() => {
    render(<Label>{defaultProps}</Label>)
  })

  test('描画される', () => {
    const labelElement = screen.getByLabelText(ARIA_LABEL)
    expect(labelElement).toBeInTheDocument()
  })

  test.todo('children が描画される')
})
