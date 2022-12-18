import { IBlogCard } from '@/src/types/blog'

export const defaultProps: IBlogCard = {
  title: '【テスト】テストタイトル',
  thumbnail: {
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1920,h_1080/https://kosotudev.com/wp-content/uploads/2021/12/nodejs.jpeg',
    alt: 'Node.js',
    height: 225,
    width: 400,
  },
  url: '/hogehoge',
  publishedAt: '2022年12月15日',
}
