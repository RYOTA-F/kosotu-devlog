import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogDetailHeader from '.'
import RootContextProvider from '@/stores/__mocks__'

export default {
  title: 'Features/Blogs/BlogDetailHeader',
  component: BlogDetailHeader,
}

const Template: Story = () => (
  <Container>
    <BlogDetailHeader />
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
