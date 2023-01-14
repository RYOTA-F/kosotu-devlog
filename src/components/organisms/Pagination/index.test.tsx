import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Pagination, { ARIA_LABEL } from '.'
import CommonContextProvider from '@/stores/__mocks__/common'

describe('Pagination', () => {
  beforeEach(() => {
    render(
      <CommonContextProvider>
        <Pagination />
      </CommonContextProvider>
    )
  })

  test('描画される', () => {
    const paginationElement = screen.getByLabelText(ARIA_LABEL)
    expect(paginationElement).toBeInTheDocument()
  })
})
