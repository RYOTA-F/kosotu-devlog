import type { IMicroCmsUsecaseCategory } from './types'
import { getCategoriesMock, getCategoryByIdMock } from './__mocks__'

export class MicroCmsUsecaseCategoryDev implements IMicroCmsUsecaseCategory {
  getCategories: IMicroCmsUsecaseCategory['getCategories'] = async () =>
    Promise.resolve(getCategoriesMock)
  getCategoryById: IMicroCmsUsecaseCategory['getCategoryById'] = async (
    params
  ) => {
    // eslint-disable-next-line no-console
    console.log(`Called [ getBlogByID > id: ${params.id}]`)
    return Promise.resolve(getCategoryByIdMock)
  }
}
