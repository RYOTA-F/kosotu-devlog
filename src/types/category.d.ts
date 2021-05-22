/**
 * CategoryType
 */

type posts = {
  id: string
}
export interface CategoryType {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  posts: posts[]
}
