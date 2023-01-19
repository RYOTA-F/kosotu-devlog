import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AccordionMenu, { ARIA_LABEL } from '.'
import { defaultProps } from './__mocks__'

describe('AccordionMenu', () => {
  beforeEach(() => {
    render(<AccordionMenu {...defaultProps} />)
  })

  test('描画される', () => {
    const accordionMenuElement = screen.getByLabelText(
      ARIA_LABEL.ACCORDION_MENU
    )
    expect(accordionMenuElement).toBeInTheDocument()
  })

  test.todo('マウスホバー時 メニューが表示される')
})
