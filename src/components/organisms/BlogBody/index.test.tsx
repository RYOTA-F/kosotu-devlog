import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogBody from '.'

describe('BlogBody', () => {
  beforeEach(() => {
    render(<BlogBody />)
  })

  test.todo('描画される')
  // test('描画される', () => {
  //   const blogBodyElement = screen.getByLabelText(ARIA_LABEL)
  //   expect(blogBodyElement).toBeInTheDocument()
  // })
})
