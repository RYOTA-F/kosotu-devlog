import { Story } from '@storybook/react'

import Pagination from '.'
import CommonContextProviderMock from '@/stores/__mocks__/common'

export default {
  title: 'Components/Pagination',
  component: Pagination,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <Pagination />
  </div>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <CommonContextProviderMock>
      <Story />
    </CommonContextProviderMock>
  ),
]
