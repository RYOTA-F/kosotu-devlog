import { TBlogDetailHeader } from '../'

export const defaultProps: TBlogDetailHeader = {
  title: 'Golangフレームワーク【Echo】を使ってみた',
  description:
    'Go言語のフレームワーク【Echo】に触れてみたので使い方や設定方法をまとめていこうと思います！',
  image: {
    url: 'https://images.microcms-assets.io/assets/968175a6ae1f429a923f393a5fa133a4/ed6c8420be324f33bff911a243d4de31/golang.webp',
    height: 1080,
    width: 1920,
  },
  categories: [
    {
      id: 'golang',
      createdAt: '2022-12-18T06:39:05.212Z',
      updatedAt: '2022-12-18T06:39:29.309Z',
      publishedAt: '2022-12-18T06:39:05.212Z',
      revisedAt: '2022-12-18T06:39:05.212Z',
      name: 'Golang',
      posts: [
        {
          id: 'go-echo',
        },
      ],
    },
  ],
  publishedAt: '2022-12-18T06:38:48.487Z',
}
