import { Story } from '@storybook/react'

import PrivacyPolicyDetail from '.'

export default {
  title: 'Features/PrivacyPolicy/PrivacyPolicyDetail',
  component: PrivacyPolicyDetail,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <PrivacyPolicyDetail />
  </div>
)

export const Normal = Template.bind({})
