import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogDetail from '.'
import BlogContextProviderMock from '@/stores/__mocks__/blog'

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
