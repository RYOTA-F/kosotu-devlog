import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TableOfContents, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('TableOfContents', () => {
  beforeEach(() => {
    render(<TableOfContents {...defaultProps} />)
  })

  test('描画される', () => {
    const tableOfContentsElement = screen.getByLabelText(ARIA_LABEL)
    expect(tableOfContentsElement).toBeInTheDocument()
  })

  test.todo('リンククリック')
  test.todo('H2スタイル')
  test.todo('H3スタイル')
})
