import { Story } from '@storybook/react'
import styled from '@emotion/styled'
import TableOfContents, { ITableOfContents } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Presentationals/TableOfContents',
  component: TableOfContents,
}

const Template: Story<ITableOfContents> = (args) => (
  <Container>
    <TableOfContents {...args} />
  </Container>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const Container = styled.div`
  width: 844px;
`
