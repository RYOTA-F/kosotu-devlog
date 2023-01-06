import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogDetail from '.'

export default {
  title: 'Organisms/BlogDetail',
  component: BlogDetail,
}

const Template: Story = () => (
  <Container>
    <BlogDetail />
  </Container>
)

export const Normal = Template.bind({})

const Container = styled.div`
  width: 844px;
`
