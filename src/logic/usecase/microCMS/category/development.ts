import type { IMicroCmsUsecaseCategory } from './types'
import { getCategoryByIdMock } from './__mocks__'

export class MicroCmsUsecaseCategoryDev implements IMicroCmsUsecaseCategory {
  getCategoryById: IMicroCmsUsecaseCategory['getCategoryById'] = async (
    params
  ) => {
    // eslint-disable-next-line no-console
    console.log(`Called [ getBlogByID > id: ${params.id}]`)
    return Promise.resolve(getCategoryByIdMock)
  }
}
