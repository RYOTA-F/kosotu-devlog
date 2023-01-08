import { Story } from '@storybook/react'
import Header from '.'

export default {
  title: 'Organisms/Header',
  component: Header,
}

const Template: Story = () => <Header />

export const Normal = Template.bind({})
