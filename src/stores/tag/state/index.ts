import { ITagState } from './types'

export const initialTagState: ITagState = {
  tag: {
    id: '',
    createdAt: '',
    updatedAt: '',
    publishedAt: '',
    revisedAt: '',
    name: '',
    blogs: [],
  },
}

export * from './types'
