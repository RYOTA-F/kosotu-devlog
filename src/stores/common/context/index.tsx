import { FC, createContext, useReducer } from 'react'
/* State */
import { initialCommonState } from '../state'
/* Reducer */
import { commonReducer } from '../reducer'
/* Types */
import { ICommonContext } from './types'
import { IContextProvider } from '../../types'

export const CommonContext = createContext<ICommonContext>({
  state: initialCommonState,
  dispatch: () => null,
})

const CommonContextProvider: FC<IContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(commonReducer, initialCommonState)

  return (
    <CommonContext.Provider value={{ state, dispatch }}>
      {children}
    </CommonContext.Provider>
  )
}

export default CommonContextProvider
