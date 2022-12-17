import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogCard from '.'
import { IBlogCard } from '@/types/blog'
import { defaultProps } from './__mocks__'

export default {
  title: 'Presentationals/BlogCard',
  component: BlogCard,
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
