import { FC, useState, useCallback, useEffect } from 'react'
/* Components */
import { ChevronRightSvg } from '@/components/Elements/Svg'
/* Const */
import { ARIA_LABEL, TOP_POSITION } from './const'

const ScrollTopButton: FC = () => {
  const [isView, setIsView] = useState(false)

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
        <button
          onClick={onClickScrollTop}
          className="h-[50px] w-[50px] pl-3 rounded-full text-center border-2 border-blue-main opacity-75 transform z-100 cursor-pointer fixed bottom-3 right-3 -rotate-90 bg-gray-list"
          aria-label={ARIA_LABEL.SCROLL_TOP_BUTTON}
        >
          <ChevronRightSvg height={20} width={20} />
        </button>
      )}
    </>
  )
}

export default ScrollTopButton
export * from './const'
