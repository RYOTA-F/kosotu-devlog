import { Story } from '@storybook/react'

import TagList, { ITagList } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Features/Tags/TagList',
  component: TagList,
}

const Template: Story<ITagList> = (args) => <TagList {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
