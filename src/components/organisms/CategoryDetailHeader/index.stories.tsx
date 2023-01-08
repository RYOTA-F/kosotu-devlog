import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import CategoryDetailHeader from '.'
import CategoryContextProviderMock from '@/stores/__mocks__/category'

export default {
  title: 'Organisms/CategoryDetailHeader',
  component: CategoryDetailHeader,
}

const Template: Story = () => (
  <Container>
    <CategoryDetailHeader />
  </Container>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <CategoryContextProviderMock>
      <Story />
    </CategoryContextProviderMock>
  ),
]

const Container = styled.div`
  width: 844px;
`
