import { Story } from '@storybook/react'

import CategoryList, { ICategoryList } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Presentationals/CategoryList',
  component: CategoryList,
}

const Template: Story<ICategoryList> = (args) => <CategoryList {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
