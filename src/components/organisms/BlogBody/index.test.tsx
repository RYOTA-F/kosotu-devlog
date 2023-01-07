import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BlogBody, { ARIA_LABEL } from '.'
import BlogContextProviderMock from '@/stores/__mocks__/blog'

describe('BlogBody', () => {
  beforeEach(() => {
    render(
      <BlogContextProviderMock>
        <BlogBody />
      </BlogContextProviderMock>
    )
  })

  test('描画される', () => {
    const blogBodyElement = screen.getByLabelText(ARIA_LABEL)
    expect(blogBodyElement).toBeInTheDocument()
  })
})
