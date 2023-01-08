import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import TagDetailHeader from '.'
import TagContextProviderMock from '@/stores/__mocks__/tag'

export default {
  title: 'Organisms/TagDetailHeader',
  component: TagDetailHeader,
}

const Template: Story = () => (
  <Container>
    <TagDetailHeader />
  </Container>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <TagContextProviderMock>
      <Story />
    </TagContextProviderMock>
  ),
]

const Container = styled.div`
  width: 844px;
`
