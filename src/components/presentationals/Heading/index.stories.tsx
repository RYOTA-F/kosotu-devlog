import { Story } from '@storybook/react'

import { H4 } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Presentationals/H4',
  component: H4,
}

const Template: Story = () => <H4>{defaultProps.children}</H4>

export const Normal = Template.bind({})
