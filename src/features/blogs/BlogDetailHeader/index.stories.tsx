import { Story } from '@storybook/react'

import BlogDetailHeader from '.'
import RootContextProvider from '@/stores/__mocks__'

export default {
  title: 'Features/Blogs/BlogDetailHeader',
  component: BlogDetailHeader,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <BlogDetailHeader />
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
