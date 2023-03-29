import { Story } from '@storybook/react'

import CategoryDetail from '.'
import RootContextProvider from '@/stores/__mocks__'

export default {
  title: 'Features/Categories/CategoryDetail',
  component: CategoryDetail,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <CategoryDetail />
  </div>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <RootContextProvider>
      <Story />
    </RootContextProvider>
  ),
]
