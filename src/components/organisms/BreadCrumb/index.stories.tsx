import { Story } from '@storybook/react'

import BreadCrumb from '.'
import CommonContextProviderMock from '@/stores/__mocks__/common'

export default {
  title: 'Organisms/BreadCrumb',
  component: BreadCrumb,
}

const Template: Story = () => <BreadCrumb />

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <CommonContextProviderMock>
      <Story />
    </CommonContextProviderMock>
  ),
]
