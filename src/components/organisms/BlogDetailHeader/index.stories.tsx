import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogDetailHeader from '.'
import BlogContextProviderMock from '@/stores/__mocks__/blog'

export default {
  title: 'Organisms/BlogDetailHeader',
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
    <BlogContextProviderMock>
      <Story />
    </BlogContextProviderMock>
  ),
]

const Container = styled.div`
  width: 844px;
`
