import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import Disclaimer from '.'

export default {
  title: 'Features/Disclaimer/DisclaimerDetail',
  component: Disclaimer,
}

const Template: Story = () => (
  <Wrapper>
    <Disclaimer />
  </Wrapper>
)

export const Normal = Template.bind({})

const Wrapper = styled.div`
  width: 844px;
`