import {
  render,
  // screen
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ScrollTopButton from '.'

describe('ScrollTopButton', () => {
  beforeEach(() => {
    render(<ScrollTopButton />)
  })

  test.todo('描画される')
  // test('描画される', () => {
  //   const scrollTopButtonElement = screen.getByLabelText(
  //     ARIA_LABEL.SCROLL_TOP_BUTTON
  //   )
  //   expect(scrollTopButtonElement).toBeInTheDocument()
  // })
})
