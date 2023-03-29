import { Story } from '@storybook/react'

import Disclaimer from '.'

export default {
  title: 'Features/Disclaimer/DisclaimerDetail',
  component: Disclaimer,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <Disclaimer />
  </div>
)

export const Normal = Template.bind({})
