import { Story } from '@storybook/react'
import TableOfContents, { ITableOfContentsProps } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Components/TableOfContents',
  component: TableOfContents,
}

const Template: Story<ITableOfContentsProps> = (args) => (
  <div className="w-[844px]">
    <TableOfContents {...args} />
  </div>
)

export const Normal = Template.bind({})
Normal.args = defaultProps
