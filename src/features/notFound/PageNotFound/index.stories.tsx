import { Story } from '@storybook/react'

import PageNotFound from '.'

export default {
  title: 'Features/NotFound/PageNotFound',
  component: PageNotFound,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <PageNotFound />
  </div>
)

export const Normal = Template.bind({})
