import { Story } from '@storybook/react'

import CategoryLabel, { ICategoryLabel } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Features/Categories/CategoryLabel',
  component: CategoryLabel,
}

const Template: Story<ICategoryLabel> = (args) => <CategoryLabel {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
