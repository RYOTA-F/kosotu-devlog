import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CategoryDetail, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('CategoryDetail', () => {
  beforeEach(() => {
    render(<CategoryDetail {...defaultProps} />)
  })

  test('描画される', () => {
    const categoryDetailElement = screen.getByLabelText(
      ARIA_LABEL.CATEGORY_DETAIL
    )
    expect(categoryDetailElement).toBeInTheDocument()
  })

  test.todo('ヘッダー')
  test.todo('投稿一覧')
})
