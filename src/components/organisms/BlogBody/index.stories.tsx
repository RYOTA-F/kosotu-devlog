import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogBody from '.'
import BlogContextProviderMock from '@/stores/__mocks__'

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
