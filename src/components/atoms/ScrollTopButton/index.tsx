import { FC } from 'react'
/* Components */
import { ChevronRightSvg } from '@/components/atoms/Svg'
/* Styles */
import { ScrollTopButtonWrapper } from './index.styles'

export const ARIA_LABEL = {
  SCROLL_TOP_BUTTON: 'ScrollTopButton',
} as const

const ScrollTopButton: FC = () => {
  return (
    <ScrollTopButtonWrapper aria-label={ARIA_LABEL.SCROLL_TOP_BUTTON}>
      <ChevronRightSvg height={20} width={20} />
    </ScrollTopButtonWrapper>
  )
}

export default ScrollTopButton
