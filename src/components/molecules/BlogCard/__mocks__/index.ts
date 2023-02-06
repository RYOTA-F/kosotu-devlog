import { IBlogCard } from '@/types/index'
import { blogsMock } from '@/logic/usecase/microCMS/blog/__mocks__'

export const defaultProps: IBlogCard = {
  title: blogsMock[0].title,
  image: blogsMock[0].image,
  url: `/blog/${blogsMock[0].id}`,
  publishedAt: blogsMock[0].publishedAt,
}
