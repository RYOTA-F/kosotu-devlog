import { Story } from '@storybook/react'

import TagDetail from '.'
import RootContextProvider from '@/stores/__mocks__'

export default {
  title: 'Features/Tags/TagDetail',
  component: TagDetail,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <TagDetail />
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
