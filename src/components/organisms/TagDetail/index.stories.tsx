import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import TagDetail, { TTagDetail } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Assembles/TagDetail',
  component: TagDetail,
}

const Template: Story<TTagDetail> = (args) => (
  <Container>
    <TagDetail {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
