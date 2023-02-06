import { FC } from 'react'
import { TagContext, initialTagState } from '@/stores/tag'
import { tagsMock } from '@/logic/usecase/microCMS/tag/__mocks__'
import { IContextProvider } from '../../types'

const TagContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <TagContext.Provider
      value={{
        state: {
          ...initialTagState,
          tag: tagsMock[0],
        },
        dispatch: () => null,
      }}
    >
      {children}
    </TagContext.Provider>
  )
}

export default TagContextProviderMock
