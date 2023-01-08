import { Story } from '@storybook/react'

import BreadCrumb, { IBreadCrumbProps } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Molecules/BreadCrumb',
  component: BreadCrumb,
}

const Template: Story<IBreadCrumbProps> = (args) => <BreadCrumb {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
