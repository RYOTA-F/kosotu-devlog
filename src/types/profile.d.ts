/**
 * ProfileType
 */
/* types */
import { ImageType } from '@/types/image'

export interface ProfileType {
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  discription: string
  body: string
  image: ImageType
}
