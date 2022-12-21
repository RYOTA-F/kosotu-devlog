import { Story } from '@storybook/react'

import CategoryItem from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Atoms/CategoryItem',
  component: CategoryItem,
}

const Template: Story = () => <CategoryItem {...defaultProps} />

export const Normal = Template.bind({})
