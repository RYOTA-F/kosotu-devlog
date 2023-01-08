import { FC, createContext, useReducer } from 'react'
/* State */
import { initialCategoryState } from '../state'
/* Reducer */
import { categoryReducer } from '../reducer'
/* Types */
import { ICategoryContext } from './types'
import { IContextProvider } from '../../types'

export const CategoryContext = createContext<ICategoryContext>({
  state: initialCategoryState,
  dispatch: () => null,
})

const CategoryContextProvider: FC<IContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, initialCategoryState)

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
