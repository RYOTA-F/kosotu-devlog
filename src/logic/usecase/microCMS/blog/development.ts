import type { IMicroCmsUsecaseBlog } from '.'
import { getBlogByIdMock } from './__mocks__'

export class MicroCmsUsecaseBlogDev implements IMicroCmsUsecaseBlog {
  getBlogByID: IMicroCmsUsecaseBlog['getBlogByID'] = async (id) => {
    // eslint-disable-next-line no-console
    console.log(`Called [ getBlogByID > id: ${id}]`)
    return Promise.resolve(getBlogByIdMock)
  }
}
