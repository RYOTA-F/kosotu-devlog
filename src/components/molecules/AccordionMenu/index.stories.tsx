import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import AccordionMenu, { IAccordionMenu } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Molecules/AccordionMenu',
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
  width: 300px;
  height: 300px;
  background-color: #c0c0c0;
  position: relative;
`

const Wrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  translate: -50%;
`
