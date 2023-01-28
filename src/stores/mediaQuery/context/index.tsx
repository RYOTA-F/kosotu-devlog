import { FC, createContext, useMemo } from 'react'
import useMedia from 'use-media'
/* Const */
import { MEDIA_QUERY } from '../const'
/* Types */
import type { IMediaQueryContext } from './types'
import type { IContextProvider } from '../../types'

export const MediaQueryContext = createContext<IMediaQueryContext>({
  isPC: false,
  isTB: false,
  isSP: false,
})

const MediaQueryContextProvider: FC<IContextProvider> = ({ children }) => {
  const isPC = useMedia(MEDIA_QUERY.PC)
  const isTB = useMedia(MEDIA_QUERY.TB)
  const isSP = useMedia(MEDIA_QUERY.SP)

  const value = useMemo(() => ({ isPC, isTB, isSP }), [isPC, isTB, isSP])

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  )
}

export default MediaQueryContextProvider
export * from './types'
