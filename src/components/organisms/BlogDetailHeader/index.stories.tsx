import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogDetailHeader from '.'

export default {
  title: 'Assembles/BlogDetailHeader',
  component: BlogDetailHeader,
}

const Template: Story = () => (
  <Container>
    <BlogDetailHeader />
  </Container>
)

export const Normal = Template.bind({})

const Container = styled.div`
  width: 844px;
`
