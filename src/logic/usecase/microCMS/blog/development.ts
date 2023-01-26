import type { IMicroCmsUsecaseBlog } from '.'
import { getBlogsMock, getBlogByIdMock } from './__mocks__'

export class MicroCmsUsecaseBlogDev implements IMicroCmsUsecaseBlog {
  getBlogs: IMicroCmsUsecaseBlog['getBlogs'] = async () => {
    return Promise.resolve(getBlogsMock)
  }

  getBlogByID: IMicroCmsUsecaseBlog['getBlogByID'] = async (id) => {
    // eslint-disable-next-line no-console
    console.log(`Called [ getBlogByID > id: ${id}]`)
    return Promise.resolve(getBlogByIdMock)
  }
}
