import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogDetailHeader, { TBlogDetailHeader } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Assembles/BlogDetailHeader',
  component: BlogDetailHeader,
}

const Template: Story<TBlogDetailHeader> = (args) => (
  <Container>
    <BlogDetailHeader {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
