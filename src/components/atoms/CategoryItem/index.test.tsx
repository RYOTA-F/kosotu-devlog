import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CategoryItem, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('CategoryItem', () => {
  beforeEach(() => {
    render(<CategoryItem {...defaultProps} />)
  })

  test('描画される', () => {
    const categoryItemElement = screen.getByLabelText(ARIA_LABEL)
    expect(categoryItemElement).toBeInTheDocument()
  })

  test.todo('Link をクリックすると カテゴリページに遷移する')
})
