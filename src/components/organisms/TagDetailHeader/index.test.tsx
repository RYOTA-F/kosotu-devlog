import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TagDetailHeader, { ARIA_LABEL } from '.'
import TagContextProviderMock from '@/stores/__mocks__/tag'

describe('TagDetailHeader', () => {
  beforeEach(() => {
    render(
      <TagContextProviderMock>
        <TagDetailHeader />
      </TagContextProviderMock>
    )
  })

  test('描画される', () => {
    const TagDetailHeaderElement = screen.getByLabelText(
      ARIA_LABEL.TAG_DETAIL_HEADER
    )
    expect(TagDetailHeaderElement).toBeInTheDocument()
  })

  test.todo('タイトル')
})
