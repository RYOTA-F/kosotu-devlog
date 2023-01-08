import { FC, createContext, useReducer } from 'react'
/* State */
import { initialTagState } from '../state'
/* Reducer */
import { tagReducer } from '../reducer'
/* Types */
import { ITagContext } from './types'
import { IContextProvider } from '../../types'

export const TagContext = createContext<ITagContext>({
  state: initialTagState,
  dispatch: () => null,
})

const TagContextProvider: FC<IContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(tagReducer, initialTagState)

  return (
    <TagContext.Provider value={{ state, dispatch }}>
      {children}
    </TagContext.Provider>
  )
}

export default TagContextProvider
