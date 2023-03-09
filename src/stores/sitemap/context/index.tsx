import { FC, createContext, useReducer } from 'react'
/* State */
import { initialSitemapState } from '../state'
/* Reducer */
import { sitemapReducer } from '../reducer'
/* Types */
import { ISitemapContext } from './types'
import { IContextProvider } from '../../types'

export const SitemapContext = createContext<ISitemapContext>({
  state: initialSitemapState,
  dispatch: () => null,
})

const SitemapContextProvider: FC<IContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(sitemapReducer, initialSitemapState)

  return (
    <SitemapContext.Provider value={{ state, dispatch }}>
      {children}
    </SitemapContext.Provider>
  )
}

export default SitemapContextProvider
