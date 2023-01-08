import { ICategory } from '@/types/index'

export interface IUseCategoryData {
  category: ICategory
  setCategory: (category: ICategory) => void
  resetCategory: () => void
}
