import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogDetail, { TBlogDetail } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Assembles/BlogDetail',
  component: BlogDetail,
}

const Template: Story<TBlogDetail> = (args) => (
  <Container>
    <BlogDetail {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
