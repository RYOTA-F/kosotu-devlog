import { Story } from '@storybook/react'

import Profile from '.'

export default {
  title: 'Features/Profile/ProfileDetail',
  component: Profile,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <Profile />
  </div>
)

export const Normal = Template.bind({})
