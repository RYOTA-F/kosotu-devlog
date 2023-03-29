import { Story } from '@storybook/react'

import BlogBody from '.'
import BlogContextProviderMock from '@/stores/__mocks__/blog'

export default {
  title: 'Features/Blogs/BlogBody',
  component: BlogBody,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <BlogBody />
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
