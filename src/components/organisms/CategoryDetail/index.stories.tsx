import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import CategoryDetail, { TCategoryDetail } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Organisms/CategoryDetail',
  component: CategoryDetail,
}

const Template: Story<TCategoryDetail> = (args) => (
  <Container>
    <CategoryDetail {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
