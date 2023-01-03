import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TagItem, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('TagItem', () => {
  beforeEach(() => {
    render(<TagItem {...defaultProps} />)
  })

  test('描画される', () => {
    const tagItemElement = screen.getByLabelText(ARIA_LABEL)
    expect(tagItemElement).toBeInTheDocument()
  })

  test.todo('Link をクリックすると タグページに遷移する')
})
