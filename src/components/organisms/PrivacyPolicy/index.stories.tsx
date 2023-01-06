import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import PrivacyPolicy from '.'

export default {
  title: 'Organisms/PrivacyPolicy',
  component: PrivacyPolicy,
}

const Template: Story = () => (
  <Wrapper>
    <PrivacyPolicy />
  </Wrapper>
)

export const Normal = Template.bind({})

const Wrapper = styled.div`
  width: 844px;
`
