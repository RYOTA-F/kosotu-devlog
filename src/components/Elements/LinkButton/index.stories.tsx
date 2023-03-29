import { Story } from '@storybook/react'
import LinkButton, { ILinkButton } from '.'

export default {
  title: 'Components/Elements/Button/LinkButton',
  component: LinkButton,
}

const defaultProps: ILinkButton = {
  href: '/profile',
  children: 'プロフィール',
}

const Template: Story = () => <LinkButton {...defaultProps} />

export const Normal = Template.bind({})
