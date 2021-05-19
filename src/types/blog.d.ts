/**
 * Blog記事のinterface
 * @package types
 */
/*types */
import { ImageType } from './image'

/**
 * BlogItemType
 */
export interface BlogItemType {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  description: string
  body: string
  image: ImageType
  categories: string[]
}

/**
 * BlogDataType
 */
export interface BlogDataType {
  blogList: BlogItemType[]
  totalCount: number
}
