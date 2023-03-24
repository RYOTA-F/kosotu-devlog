import { Story } from '@storybook/react'

import PaginationItem, { IPaginationItem } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Components/Elements/PaginationItem',
  component: PaginationItem,
}

const Template: Story<IPaginationItem> = (args) => <PaginationItem {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
