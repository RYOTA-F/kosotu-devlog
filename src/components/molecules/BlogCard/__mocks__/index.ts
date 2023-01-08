import { IBlogCard } from '@/types/index'

export const defaultProps: IBlogCard = {
  title: '【テスト】テストタイトル',
  image: {
    url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1920,h_1080/https://kosotudev.com/wp-content/uploads/2021/12/nodejs.jpeg',
    height: 225,
    width: 400,
  },
  url: '/hogehoge',
  publishedAt: '2022-12-18T06:39:05.212Z',
}
