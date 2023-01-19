import { ITableOfContents } from '@/types/index'
import { ICommonState } from '@/stores/common'

export const tableOfContentsStateMock: ITableOfContents[] = [
  { id: 'test1', text: 'H2', type: 'h2' },
  { id: 'test2', text: 'H3', type: 'h3' },
  { id: 'test3', text: 'H2-1', type: 'h2' },
  { id: 'test4', text: 'H3-2', type: 'h3' },
]

export const paginationStateMock: ICommonState['pagination'] = {
  currentPage: 2,
  totalPage: 5,
  type: 'blog',
}

export const breadCrumbStateMock: ICommonState['breadClumb'] = {
  categoryParentId: 'front-end',
  categoryParentName: 'フロントエンド',
  categoryChildId: 'react',
  categoryChildName: 'React',
  currentName: 'Test',
}
