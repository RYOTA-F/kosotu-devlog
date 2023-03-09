import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import Profile from '.'

export default {
  title: 'Organisms/Profile',
  component: Profile,
}

const Template: Story = () => (
  <Wrapper>
    <Profile />
  </Wrapper>
)

export const Normal = Template.bind({})

const Wrapper = styled.div`
  width: 844px;
`
