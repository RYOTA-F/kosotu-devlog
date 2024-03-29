/* Const */
import { SITEMAP } from '@/const/index'

export interface ISitemap {
  id: string
  name: string
  url: string
  children: IProcessingChildrenCategories[]
}

export interface IProcessingChildrenCategories {
  id: string
  name: string
  url: string
  parent: string
  blogs: {
    title: string
    url: string
    category: string
  }[]
}

export type TSitemapType = typeof SITEMAP[keyof typeof SITEMAP]
