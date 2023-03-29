import { Story } from '@storybook/react'

import BlogCard, { IBlogCard } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Features/Blogs/BlogCard',
  component: BlogCard,
}

const Template: Story<IBlogCard> = (args) => (
  <div className="w-[400px]">
    <BlogCard {...args} />
  </div>
)

export const Normal = Template.bind({})
Normal.args = defaultProps
