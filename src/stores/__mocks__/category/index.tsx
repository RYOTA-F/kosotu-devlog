import { FC } from 'react'
import { CategoryContext, initialCategoryState } from '@/stores/category'
import { categoryStateMock } from './mock'
import { IContextProvider } from '../../types'

const CategoryContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <CategoryContext.Provider
      value={{
        state: {
          ...initialCategoryState,
          category: categoryStateMock,
        },
        dispatch: () => null,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProviderMock
