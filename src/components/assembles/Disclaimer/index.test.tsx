import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Disclaimer, { ARIA_LABEL } from '.'

describe('Disclaimer', () => {
  beforeEach(() => {
    render(<Disclaimer />)
  })

  test('描画される', () => {
    const disclaimerElement = screen.getByLabelText(ARIA_LABEL.DISCLAIMER)
    expect(disclaimerElement).toBeInTheDocument()
  })

  test.todo('コメント')
  test.todo('情報')
  test.todo('損害等の責任')
  test.todo('著作権・肖像権')
  test.todo('無断転載')
})
