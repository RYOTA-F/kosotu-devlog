import { Story } from '@storybook/react'

import BreadCrumb, { IBreadCrumb } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Presentationals/BreadCrumb',
  component: BreadCrumb,
}

const Template: Story<IBreadCrumb> = (args) => <BreadCrumb {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
