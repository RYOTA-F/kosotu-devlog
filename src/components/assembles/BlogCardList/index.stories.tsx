import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogCardList, { IBlogCardList } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Assembles/BlogCardList',
  component: BlogCardList,
}

const Template: Story<IBlogCardList> = (args) => (
  <Container>
    <BlogCardList {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
