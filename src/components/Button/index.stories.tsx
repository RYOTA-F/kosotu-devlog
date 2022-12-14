import { Story } from '@storybook/react'
import Button, { IButton } from './'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Button',
  component: Button,
}

const defaultProps: IButton = {
  children: <p>クリック</p>,
  onClick: action('onClick'),
}

const Template: Story = () => <Button {...defaultProps} />

export const Normal = Template.bind({})
