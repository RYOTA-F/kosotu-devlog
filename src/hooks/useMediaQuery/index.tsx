import { useContext } from 'react'
/* Stores */
import { MediaQueryContext } from '@/stores/mediaQuery'

const useMediaQuery = () => {
  const { isPC, isTB, isSP } = useContext(MediaQueryContext)

  return { isPC, isTB, isSP }
}

export default useMediaQuery
