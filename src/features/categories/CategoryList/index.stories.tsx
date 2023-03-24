import { Story } from '@storybook/react'

import CategoryList, { ICategoryList } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Features/Categories/CategoryList',
  component: CategoryList,
}

const Template: Story<ICategoryList> = (args) => <CategoryList {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
