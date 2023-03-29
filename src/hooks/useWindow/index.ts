import { useState, useLayoutEffect } from 'react'
/* Const */
import { WINDOW_WIDTH } from '@/const/site/window'

const useWindow = () => {
  const [size, setSize] = useState([0, 0])

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const windowWidth = size[0]
  const windowHeight = size[1]

  const isPC = windowWidth >= WINDOW_WIDTH.PC_MIN
  const isTB =
    windowWidth >= WINDOW_WIDTH.TB_MIN && windowWidth < WINDOW_WIDTH.PC_MIN
  const isSP = windowWidth < WINDOW_WIDTH.TB_MIN

  return {
    isPC,
    isTB,
    isSP,
    windowWidth,
    windowHeight,
  }
}

export default useWindow
