import { Story } from '@storybook/react'
import styled from '@emotion/styled'
import Profile from '.'

export default {
  title: 'Components/Profile',
  component: Profile,
}

const Template: Story = () => (
  <Container>
    <Profile />
  </Container>
)

export const Normal = Template.bind({})

const Container = styled.div`
  width: 300px;
`
