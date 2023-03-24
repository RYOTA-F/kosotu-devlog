import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import List, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('List', () => {
  beforeEach(() => {
    render(<List {...defaultProps} />)
  })

  test('描画される', () => {
    const listElement = screen.getByLabelText(ARIA_LABEL)
    expect(listElement).toBeInTheDocument()
  })

  test.todo('list の数だけ ListItem が描画される')
})
