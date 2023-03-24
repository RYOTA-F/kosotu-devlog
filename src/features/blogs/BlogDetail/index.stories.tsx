import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogDetail from '.'
import RootContextProvider from '@/stores/__mocks__'

export default {
  title: 'Features/Blogs/BlogDetail',
  component: BlogDetail,
}

const Template: Story = () => (
  <Container>
    <BlogDetail />
  </Container>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <RootContextProvider>
      <Story />
    </RootContextProvider>
  ),
]

const Container = styled.div`
  width: 844px;
`
