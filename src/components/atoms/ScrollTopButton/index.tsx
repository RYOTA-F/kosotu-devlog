import { FC, useState, useCallback, useEffect } from 'react'
/* Components */
import { ChevronRightSvg } from '@/components/atoms/Svg'
/* Styles */
import { ScrollTopButtonWrapper } from './index.styles'

export const ARIA_LABEL = {
  SCROLL_TOP_BUTTON: 'ScrollTopButton',
} as const

const TOP_POSITION = 0 as const

const ScrollTopButton: FC = () => {
  const [isView, setIsView] = useState(true)

  const onClickScrollTop = () => {
    window.scrollTo({
      top: TOP_POSITION,
      behavior: 'smooth',
    })
  }

  const onChangeScrollHightHandelr = useCallback(() => {
    const scrollY = window.scrollY
    const height = window.outerHeight
    setIsView(scrollY > height)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onChangeScrollHightHandelr)
    return () =>
      window.removeEventListener('scroll', onChangeScrollHightHandelr)
  }, [onChangeScrollHightHandelr])

  return (
    <>
      {isView && (
        <ScrollTopButtonWrapper
          onClick={onClickScrollTop}
          aria-label={ARIA_LABEL.SCROLL_TOP_BUTTON}
        >
          <ChevronRightSvg height={20} width={20} />
        </ScrollTopButtonWrapper>
      )}
    </>
  )
}

export default ScrollTopButton
