import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import CategoryDetailHeader, { TCategoryDetailHeader } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Organisms/CategoryDetailHeader',
  component: CategoryDetailHeader,
}

const Template: Story<TCategoryDetailHeader> = (args) => (
  <Container>
    <CategoryDetailHeader {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
