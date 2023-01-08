import { IBlog } from '@/types/microCMS/blog'

export interface IBlogState {
  blogs: IBlog[]
  totalCount?: number
  offset?: number
  limit?: number
}
