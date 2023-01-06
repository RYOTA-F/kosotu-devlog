import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import TagDetailHeader, { TTagDetailHeader } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Organisms/TagDetailHeader',
  component: TagDetailHeader,
}

const Template: Story<TTagDetailHeader> = (args) => (
  <Container>
    <TagDetailHeader {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
