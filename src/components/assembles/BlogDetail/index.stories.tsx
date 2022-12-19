import { Story } from '@storybook/react'
import styled from '@emotion/styled'
/* Types */
import { IBlog } from '@/types/index'

import BlogDetail from '.'
import { defaultProps } from '@/components/presentationals/BlogCard/__mocks__'

export default {
  title: 'Assembles/BlogDetail',
  component: BlogDetail,
}

const Template: Story<IBlog> = (args) => (
  <Container>
    <BlogDetail {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
