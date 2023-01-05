import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import BlogBody, { IBlogBody } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Presentationals/BlogBody',
  component: BlogBody,
}

const Template: Story<IBlogBody> = (args) => (
  <Container>
    <BlogBody {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
