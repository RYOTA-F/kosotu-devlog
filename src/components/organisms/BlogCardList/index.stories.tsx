import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogCardList from '.'
import BlogContextProviderMock from '@/stores/__mocks__'

export default {
  title: 'Organisms/BlogCardList',
  component: BlogCardList,
}

const Template: Story = () => (
  <Container>
    <BlogCardList />
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
