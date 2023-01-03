import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogDetail, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('BlogDetail', () => {
  beforeEach(() => {
    render(<BlogDetail {...defaultProps} />)
  })

  test('描画される', () => {
    const blogDetailElement = screen.getByLabelText(ARIA_LABEL.BLOG_DETAIL)
    expect(blogDetailElement).toBeInTheDocument()
  })

  test.todo('BlogDetailHeader が描画される')
  test.todo('oldPublishedAt が存在する場合 oldPublishedAt が渡される')
  test.todo('oldPublishedAt が存在しない場合 publishedAt が渡される')
  test.todo('BlogBody が描画される')
})
