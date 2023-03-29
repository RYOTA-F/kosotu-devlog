import { Story } from '@storybook/react'

import Layout from '.'
import CommonContextProviderMock from '@/stores/__mocks__'

export default {
  title: 'Components/Layout',
  component: Layout,
}

const Template: Story = () => (
  <Layout>
    <div>テストテスト</div>
  </Layout>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <CommonContextProviderMock>
      <Story />
    </CommonContextProviderMock>
  ),
]
