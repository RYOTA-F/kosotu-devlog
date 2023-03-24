import { Story } from '@storybook/react'

import CategoryItem, { ICategoryItem } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Features/Categories/CategoryItem',
  component: CategoryItem,
}

const Template: Story<ICategoryItem> = (args) => <CategoryItem {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
