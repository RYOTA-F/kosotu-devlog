import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import CategoryDetail from '.'
import RootContextProvider from '@/stores/__mocks__'

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
    <RootContextProvider>
      <Story />
    </RootContextProvider>
  ),
]

const Container = styled.div`
  width: 844px;
`
