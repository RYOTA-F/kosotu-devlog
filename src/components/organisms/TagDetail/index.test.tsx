import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TagDetail, { ARIA_LABEL } from '.'
import RootContextProvider from '@/stores/__mocks__'

describe('TagDetail', () => {
  beforeEach(() => {
    render(
      <RootContextProvider>
        <TagDetail />
      </RootContextProvider>
    )
  })

  test('描画される', () => {
    const tagDetailElement = screen.getByLabelText(ARIA_LABEL.TAG_DETAIL)
    expect(tagDetailElement).toBeInTheDocument()
  })

  test.todo('ヘッダー')
  test.todo('投稿一覧')
})
