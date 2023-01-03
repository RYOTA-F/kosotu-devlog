import { Story } from '@storybook/react'

import TagItem, { ITagItem } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Atoms/TagItem',
  component: TagItem,
}

const Template: Story<ITagItem> = (args) => <TagItem {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
