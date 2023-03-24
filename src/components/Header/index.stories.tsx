import { Story } from '@storybook/react'

import Header from '.'
import MediaQueryContextProvider from '@/stores/mediaQuery'

export default {
  title: 'Organisms/Header',
  component: Header,
}

const Template: Story = () => <Header />

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <MediaQueryContextProvider>
      <Story />
    </MediaQueryContextProvider>
  ),
]
