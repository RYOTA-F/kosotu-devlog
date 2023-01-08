import { FC } from 'react'
import { TagContext, initialTagState } from '@/stores/tag'
import { tagStateMock } from './mock'
import { IContextProvider } from '../../types'

const TagContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <TagContext.Provider
      value={{
        state: {
          ...initialTagState,
          tag: tagStateMock,
        },
        dispatch: () => null,
      }}
    >
      {children}
    </TagContext.Provider>
  )
}

export default TagContextProviderMock
