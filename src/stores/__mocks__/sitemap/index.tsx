import { FC } from 'react'
import { SitemapContext, initialSitemapState } from '@/stores/sitemap'
import { sitemapStateMock } from './mock'
import { IContextProvider } from '../../types'

const SitemapContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <SitemapContext.Provider
      value={{
        state: {
          ...initialSitemapState,
          sitemap: sitemapStateMock,
        },
        dispatch: () => null,
      }}
    >
      {children}
    </SitemapContext.Provider>
  )
}

export default SitemapContextProviderMock
