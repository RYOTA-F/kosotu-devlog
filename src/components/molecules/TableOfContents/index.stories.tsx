import { Story } from '@storybook/react'
import styled from '@emotion/styled'
import TableOfContents, { ITableOfContentsProps } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Molecules/TableOfContents',
  component: TableOfContents,
}

const Template: Story<ITableOfContentsProps> = (args) => (
  <Container>
    <TableOfContents {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
