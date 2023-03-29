import { Story } from '@storybook/react'

import Header from '.'
import CommonContextProviderMock from '@/stores/__mocks__'

export default {
  title: 'Components/Header',
  component: Header,
}

const Template: Story = () => <Header />

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <CommonContextProviderMock>
      <Story />
    </CommonContextProviderMock>
  ),
]
