import { Story } from '@storybook/react'
import Sidenav from '.'

export default {
  title: 'Organisms/Sidenav',
  component: Sidenav,
}

const Template: Story = () => <Sidenav />

export const Normal = Template.bind({})
