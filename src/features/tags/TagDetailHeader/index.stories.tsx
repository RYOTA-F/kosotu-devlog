import { Story } from '@storybook/react'

import TagDetailHeader from '.'
import TagContextProviderMock from '@/stores/__mocks__/tag'

export default {
  title: 'Features/Tags/TagDetailHeader',
  component: TagDetailHeader,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <TagDetailHeader />
  </div>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <TagContextProviderMock>
      <Story />
    </TagContextProviderMock>
  ),
]
