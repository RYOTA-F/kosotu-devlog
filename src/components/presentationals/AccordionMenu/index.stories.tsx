import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import AccordionMenu, { IAccordionMenu } from './'
import { defaultProps } from './__mocks__'
import { COLOR } from '@/const/index'

export default {
  title: 'Presentationals/AccordionMenu',
  component: AccordionMenu,
}

const Template: Story<IAccordionMenu> = (args) => (
  <Container>
    <Wrapper>
      <AccordionMenu {...args} />
    </Wrapper>
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: ${COLOR.BLUE_GROUP.MAIN};
  position: relative;
`

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 200px;
`
