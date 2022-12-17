import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogCard from '.'
import { IBlogCard } from '@/types/blog'

export default {
  title: 'Presentationals/BlogCard',
  component: BlogCard,
}

const defaultProps: IBlogCard = {
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

const Template: Story<IBlogCard> = (args) => (
  <Container>
    <BlogCard {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 400px;
`
