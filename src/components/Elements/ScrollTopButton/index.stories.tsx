import { Story } from '@storybook/react'
import ScrollTopButton from '.'

export default {
  title: 'Components/Elements/ScrollTopButton',
  component: ScrollTopButton,
}

const Template: Story = () => (
  <div className="h-[200vh]">
    <ScrollTopButton forceView />
  </div>
)

export const Normal = Template.bind({})
