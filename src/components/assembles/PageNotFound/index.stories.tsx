import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import PageNotFound from '.'

export default {
  title: 'Assembles/PageNotFound',
  component: PageNotFound,
}

const Template: Story = () => (
  <Wrapper>
    <PageNotFound />
  </Wrapper>
)

export const Normal = Template.bind({})

const Wrapper = styled.div`
  width: 844px;
`
