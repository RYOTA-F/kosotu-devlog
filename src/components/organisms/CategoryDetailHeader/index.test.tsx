import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CategoryDetailHeader, { ARIA_LABEL } from '.'
import CategoryContextProviderMock from '@/stores/__mocks__/category'

describe('CategoryDetailHeader', () => {
  beforeEach(() => {
    render(
      <CategoryContextProviderMock>
        <CategoryDetailHeader />
      </CategoryContextProviderMock>
    )
  })

  test('描画される', () => {
    const categoryDetailHeaderElement = screen.getByLabelText(
      ARIA_LABEL.CATEGORY_DETAIL_HEADER
    )
    expect(categoryDetailHeaderElement).toBeInTheDocument()
  })

  test.todo('タイトル')
  test.todo('親子カテゴリ')
})
