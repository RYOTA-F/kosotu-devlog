import { ICommonState } from './types'

export const initialCommonState: ICommonState = {
  breadClumb: undefined,
  tableOfContents: [],
  pagination: {
    currentPage: 0,
    totalPage: 0,
  },
}

export * from './types'
