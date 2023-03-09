import { Story } from '@storybook/react'
import styled from '@emotion/styled'
import { COLOR } from '@/const/index'

import HamburgerMenu from '.'
import CommonContextProviderMock from '@/stores/__mocks__/common'
import { MediaQueryContext } from '@/stores/mediaQuery'

export default {
  title: 'Atoms/HamburgerMenu',
  component: HamburgerMenu,
}

const Wrapper = styled.div`
  width: 100vw;
  height: 50px;
  margin: -16px;
  background-color: ${COLOR.BLUE_GROUP.MAIN};
`

const Template: Story = () => (
  <Wrapper>
    <HamburgerMenu />
  </Wrapper>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <MediaQueryContext.Provider
      value={{ isPC: false, isTB: false, isSP: true }}
    >
      <CommonContextProviderMock>
        <Story />
      </CommonContextProviderMock>
    </MediaQueryContext.Provider>
  ),
]
