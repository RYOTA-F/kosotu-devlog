import { Story } from '@storybook/react'

import BlogDetail from '.'
import RootContextProvider from '@/stores/__mocks__'

export default {
  title: 'Features/Blogs/BlogDetail',
  component: BlogDetail,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <BlogDetail />
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
