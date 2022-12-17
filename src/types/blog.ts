export interface IBlog {
  title: string
  thumbnail: IBlogThumbnail
  url: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export interface IBlogThumbnail {
  url: string
  alt: string
  height: number
  width: number
}

export type IBlogCard = Pick<
  IBlog,
  'title' | 'thumbnail' | 'url' | 'publishedAt'
>
