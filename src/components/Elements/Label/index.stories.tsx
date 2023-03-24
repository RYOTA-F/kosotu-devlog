import { Story } from '@storybook/react'

import Label, { ILabel } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Atoms/Label',
  component: Label,
}

const Template: Story<ILabel> = (args) => <Label {...args} />

export const Normal = Template.bind({})
Normal.args = { children: defaultProps }
