import { Story } from '@storybook/react'
import Button, { IButton } from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Elements/Button',
  component: Button,
}

const defaultProps: IButton = {
  children: 'クリック',
  onClick: action('onClick'),
}

const Template: Story = () => <Button {...defaultProps} />

export const Normal = Template.bind({})
