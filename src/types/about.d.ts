/**
 * AboutType
 */
/* types */
import { ImageType } from '@/types/image'

export interface AboutType {
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  discription: string
  body: string
  image: ImageType
}
