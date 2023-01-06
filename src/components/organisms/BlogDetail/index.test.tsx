import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogDetail from '.'

describe('BlogDetail', () => {
  beforeEach(() => {
    render(<BlogDetail />)
  })

  test.todo('描画される')
  // test('描画される', () => {
  //   const blogDetailElement = screen.getByLabelText(ARIA_LABEL.BLOG_DETAIL)
  //   expect(blogDetailElement).toBeInTheDocument()
  // })

  test.todo('BlogDetailHeader が描画される')
  test.todo('BlogBody が描画される')
})
