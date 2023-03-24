import { Story } from '@storybook/react'
import ActionButton, { IActionButton } from '.'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/Elements/Button/ActionButton',
  component: ActionButton,
}

const defaultProps: IActionButton = {
  children: 'クリック',
  onClick: action('onClick'),
}

const Template: Story = () => <ActionButton {...defaultProps} />

export const Normal = Template.bind({})
