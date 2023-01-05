import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TagDetailHeader, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('TagDetailHeader', () => {
  beforeEach(() => {
    render(<TagDetailHeader {...defaultProps} />)
  })

  test('描画される', () => {
    const TagDetailHeaderElement = screen.getByLabelText(
      ARIA_LABEL.TAG_DETAIL_HEADER
    )
    expect(TagDetailHeaderElement).toBeInTheDocument()
  })

  test.todo('タイトル')
})
