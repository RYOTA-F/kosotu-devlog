import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogDetail from '.'
import BlogContextProviderMock from '@/stores/__mocks__/blog'
import CommonContextProviderMock from '@/stores/__mocks__/common'

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
    <CommonContextProviderMock>
      <BlogContextProviderMock>
        <Story />
      </BlogContextProviderMock>
    </CommonContextProviderMock>
  ),
]

const Container = styled.div`
  width: 844px;
`
