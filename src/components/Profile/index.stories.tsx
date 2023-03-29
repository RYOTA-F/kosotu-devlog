import { Story } from '@storybook/react'
import Profile from '.'

export default {
  title: 'Components/Profile',
  component: Profile,
}

const Template: Story = () => (
  <div className="w-[300px]">
    <Profile />
  </div>
)

export const Normal = Template.bind({})
