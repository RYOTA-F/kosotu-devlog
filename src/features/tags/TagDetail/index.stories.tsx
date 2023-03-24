import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import TagDetail from '.'
import RootContextProvider from '@/stores/__mocks__'

export default {
  title: 'Features/Tags/TagDetail',
  component: TagDetail,
}

const Template: Story = () => (
  <Container>
    <TagDetail />
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
