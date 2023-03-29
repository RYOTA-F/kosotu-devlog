import { Story } from '@storybook/react'

import CategoryDetailHeader from '.'
import CategoryContextProviderMock from '@/stores/__mocks__/category'

export default {
  title: 'Features/Categories/CategoryDetailHeader',
  component: CategoryDetailHeader,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <CategoryDetailHeader />
  </div>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <CategoryContextProviderMock>
      <Story />
    </CategoryContextProviderMock>
  ),
]
