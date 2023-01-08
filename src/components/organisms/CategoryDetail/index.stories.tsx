import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import CategoryDetail from '.'
import BlogContextProviderMock from '@/stores/__mocks__/blog'
import CategoryContextProviderMock from '@/stores/__mocks__/category'

export default {
  title: 'Organisms/CategoryDetail',
  component: CategoryDetail,
}

const Template: Story = () => (
  <Container>
    <CategoryDetail />
  </Container>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <BlogContextProviderMock>
      <CategoryContextProviderMock>
        <Story />
      </CategoryContextProviderMock>
    </BlogContextProviderMock>
  ),
]

const Container = styled.div`
  width: 844px;
`
