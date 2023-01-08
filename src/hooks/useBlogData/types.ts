import { IBlog } from '@/types/index'

export interface IUseBlogData {
  blog: IBlog
  blogs: IBlog[]
  setBlogs: (blogs: IBlog[]) => void
  resetBlogs: () => void
}
