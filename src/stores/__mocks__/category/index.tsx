import { FC } from 'react'
import { CategoryContext, initialCategoryState } from '@/stores/category'
import { categoriesMock } from '@/logic/usecase/microCMS/category/__mocks__'
import { IContextProvider } from '@/stores/types'

const CategoryContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <CategoryContext.Provider
      value={{
        state: {
          ...initialCategoryState,
          category: categoriesMock[0],
        },
        dispatch: () => null,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProviderMock
