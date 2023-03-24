import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import PrivacyPolicyDetail from '.'

export default {
  title: 'Features/PrivacyPolicy/PrivacyPolicyDetail',
  component: PrivacyPolicyDetail,
}

const Template: Story = () => (
  <Wrapper>
    <PrivacyPolicyDetail />
  </Wrapper>
)

export const Normal = Template.bind({})

const Wrapper = styled.div`
  width: 844px;
`
