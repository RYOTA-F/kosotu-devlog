import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogBody from '.'

export default {
  title: 'Organisms/BlogBody',
  component: BlogBody,
}

const Template: Story = () => (
  <Container>
    <BlogBody />
  </Container>
)

export const Normal = Template.bind({})

const Container = styled.div`
  width: 844px;
`
