import { Story } from '@storybook/react'

import List, { IList } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Atoms/List',
  component: List,
}

const Template: Story<IList> = (args) => <List {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
