/* types */
import { BlogItemType, BlogDataType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ImageType } from '@/types/image'

/**
 * initImageState
 */
export const initImageState: ImageType = {
  url: '',
  height: 0,
  width: 0,
}

/**
 * initBlogItem
 */
export const initBlogItem: BlogItemType = {
  id: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
  title: '',
  body: '',
  description: '',
  image: initImageState,
  categories: [],
}

/**
 * initBlogData
 */
export const initBlogData: BlogDataType = {
  blogList: [],
  totalCount: 0,
}

/**
 * initCategoryData
 */
export const initCategoryData: CategoryType = {
  id: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
  name: '',
  posts: [],
}
