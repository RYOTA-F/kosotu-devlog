import { Story } from '@storybook/react'
import Header from '.'

export default {
  title: 'Sections/Header',
  component: Header,
}

const Template: Story = () => <Header />

export const Normal = Template.bind({})
