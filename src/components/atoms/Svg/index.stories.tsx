import { ReactNode } from 'react'
import { Story } from '@storybook/react'

import { TimeSvg as _TimeSvg, ListSvg as _ListSvg } from './'
import { defaultProps } from './__mocks__'

const Svg = ({ children }: { children: ReactNode }) => <>{children}</>

export default {
  title: 'Atoms/Svg',
  component: Svg,
}

const Template: Story<{ children: ReactNode }> = (args) => <Svg {...args} />

export const TimeSvg = Template.bind({})
TimeSvg.args = { children: <_TimeSvg {...defaultProps} /> }

export const ListSvg = Template.bind({})
ListSvg.args = { children: <_ListSvg {...defaultProps} /> }
