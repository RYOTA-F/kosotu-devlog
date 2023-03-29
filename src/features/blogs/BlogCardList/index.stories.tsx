import { Story } from '@storybook/react'

import BlogCardList from '.'
import BlogContextProviderMock from '@/stores/__mocks__/blog'

export default {
  title: 'Features/Blogs/BlogCardList',
  component: BlogCardList,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <BlogCardList />
  </div>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <BlogContextProviderMock>
      <Story />
    </BlogContextProviderMock>
  ),
]
