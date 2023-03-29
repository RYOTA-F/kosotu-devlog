import { Story } from '@storybook/react'

import HamburgerMenu from '.'
import CommonContextProviderMock from '@/stores/__mocks__/common'

export default {
  title: 'Components/HamburgerMenu',
  component: HamburgerMenu,
}

const Template: Story = () => (
  <div className="w-[100vw] h-[72px] bg-blue-main -m-4">
    <HamburgerMenu />
  </div>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <CommonContextProviderMock>
      <Story />
    </CommonContextProviderMock>
  ),
]
