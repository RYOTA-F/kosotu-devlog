import { IBlogCard } from '../'
import { blogsMock } from '@/logic/usecase/microCMS/blog/__mocks__'

export const defaultProps: IBlogCard = {
  id: blogsMock[0].id,
  title: blogsMock[0].title,
  image: blogsMock[0].image,
}
