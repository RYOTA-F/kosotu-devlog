import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogDetailHeader from '.'

describe('BlogDetailHeader', () => {
  beforeEach(() => {
    render(<BlogDetailHeader />)
  })

  test.todo('描画される')
  // test('描画される', () => {
  //   const blogDetailHeaderElement = screen.getByLabelText(
  //     ARIA_LABEL.BLOG_DETAIL_HEADER
  //   )
  //   expect(blogDetailHeaderElement).toBeInTheDocument()
  // })

  test.todo('CategoryList が描画される')
  test.todo('tableOfContents が存在する場合 TableOfContents が描画される')
})
