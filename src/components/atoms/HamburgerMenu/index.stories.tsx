import { Story } from '@storybook/react'
import styled from '@emotion/styled'
import { COLOR } from '@/const/index'

import HamburgerMenu from '.'

export default {
  title: 'Atoms/HamburgerMenu',
  component: HamburgerMenu,
}

const Wrapper = styled.div`
  background-color: ${COLOR.BLUE_GROUP.MAIN};
`

const Template: Story = () => (
  <Wrapper>
    <HamburgerMenu />
  </Wrapper>
)

export const Normal = Template.bind({})
