import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TagList, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('TagList', () => {
  beforeEach(() => {
    render(<TagList {...defaultProps} />)
  })

  test('描画される', () => {
    const tagListElement = screen.getByLabelText(ARIA_LABEL)
    expect(tagListElement).toBeInTheDocument()
  })

  test.todo('categories の数だけ TagItem が描画される')
})
