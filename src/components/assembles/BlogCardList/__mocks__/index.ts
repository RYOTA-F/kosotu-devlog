import { IBlogCardList } from '..'

export const defaultProps: IBlogCardList = {
  blogList: [
    {
      title: 'Golangフレームワーク【Echo】を使ってみた',
      thumbnail: {
        url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1920,h_1080/https://kosotudev.com/wp-content/uploads/2022/06/golang.jpeg',
        alt: 'Golang',
        height: 225,
        width: 400,
      },
      url: 'https://kosotudev.com/go-echo/',
      publishedAt: '2022年12月10日',
    },
    {
      title:
        '【React】親コンポーネントのState変更時に子コンポーネントのInput Focusが外れる問題',
      thumbnail: {
        url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1920,h_1080/https://kosotudev.com/wp-content/uploads/2022/06/react.jpeg',
        alt: 'React',
        height: 225,
        width: 400,
      },
      url: 'https://kosotudev.com/react-input-rerender/',
      publishedAt: '2022年12月11日',
    },
    {
      title: '【Lambda × RDS Proxy】LambdaからProxy経由でRDSに接続してみる',
      thumbnail: {
        url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1920,h_1080/https://kosotudev.com/wp-content/uploads/2022/01/rds.jpeg',
        alt: 'DynamoDB',
        height: 225,
        width: 400,
      },
      url: 'https://kosotudev.com/rds-proxy/',
      publishedAt: '2022年12月12日',
    },
    {
      title:
        '【Storybook】Rails × React × Webpacker環境にStorybookを導入してみた件',
      thumbnail: {
        url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1920,h_1080/https://kosotudev.com/wp-content/uploads/2022/06/storybook.jpeg',
        alt: 'Storybook',
        height: 225,
        width: 400,
      },
      url: 'https://kosotudev.com/storybook-webpacker/',
      publishedAt: '2022年12月13日',
    },
  ],
}
