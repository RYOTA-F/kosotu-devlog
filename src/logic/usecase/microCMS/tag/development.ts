import type { IMicroCmsUsecaseTag } from './types'
import { getTagsMock, getTagByIdMock } from './__mocks__'

export class MicroCmsUsecaseTagDev implements IMicroCmsUsecaseTag {
  getTags: IMicroCmsUsecaseTag['getTags'] = async () =>
    Promise.resolve(getTagsMock)
  getTagById: IMicroCmsUsecaseTag['getTagById'] = async (params) => {
    // eslint-disable-next-line no-console
    console.log(`Called [ getTagById > id: ${params.id}]`)
    return Promise.resolve(getTagByIdMock)
  }
}
