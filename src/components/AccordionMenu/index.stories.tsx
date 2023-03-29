import { Story } from '@storybook/react'

import AccordionMenu, { IAccordionMenu } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Components/AccordionMenu',
  component: AccordionMenu,
}

const Template: Story<IAccordionMenu> = (args) => (
  <div className="w-[90vw] h-[90vh] bg-blue-main">
    <div className="absolute top-[25%] left-[50%] -translate-x-[75%]">
      <AccordionMenu {...args} />
    </div>
  </div>
)

export const Normal = Template.bind({})
Normal.args = defaultProps
