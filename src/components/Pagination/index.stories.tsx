import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import Pagination from '.'
import CommonContextProviderMock from '@/stores/__mocks__/common'

export default {
  title: 'Components/Pagination',
  component: Pagination,
}

const Template: Story = () => (
  <Container>
    <Pagination />
  </Container>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <CommonContextProviderMock>
      <Story />
    </CommonContextProviderMock>
  ),
]

const Container = styled.div`
  width: 844px;
`
