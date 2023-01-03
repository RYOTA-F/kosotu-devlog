import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BreadCrumb, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('BreadCrumb', () => {
  beforeEach(() => {
    render(<BreadCrumb {...defaultProps} />)
  })

  test('描画される', () => {
    const breadCrumbElement = screen.getByLabelText(ARIA_LABEL.BREAD_CRUMB)
    expect(breadCrumbElement).toBeInTheDocument()
  })

  test.todo('親カテゴリ ラベル')
  test.todo('親カテゴリ クリック')
  test.todo('子カテゴリ ラベル')
  test.todo('子カテゴリ クリック')
  test.todo('タイトル ラベル')
})
