import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogCardList from '.'

export default {
  title: 'Assembles/BlogCardList',
  component: BlogCardList,
}

const Template: Story = () => (
  <Container>
    <BlogCardList />
  </Container>
)

export const Normal = Template.bind({})

const Container = styled.div`
  width: 844px;
`
