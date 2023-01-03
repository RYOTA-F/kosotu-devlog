import { ReactNode } from 'react'
import { Story } from '@storybook/react'

import {
  HomeSvg as _HomeSvg,
  TimeSvg as _TimeSvg,
  ListSvg as _ListSvg,
  TwitterSvg as _TwitterSvg,
} from './'
import { defaultProps } from './__mocks__'

const Svg = ({ children }: { children: ReactNode }) => <>{children}</>

export default {
  title: 'Atoms/Svg',
  component: Svg,
}

const Template: Story<{ children: ReactNode }> = (args) => <Svg {...args} />

export const HomeSvg = Template.bind({})
HomeSvg.args = { children: <_HomeSvg {...defaultProps} /> }

export const TimeSvg = Template.bind({})
TimeSvg.args = { children: <_TimeSvg {...defaultProps} /> }

export const ListSvg = Template.bind({})
ListSvg.args = { children: <_ListSvg {...defaultProps} /> }

export const TwitterSvg = Template.bind({})
TwitterSvg.args = { children: <_TwitterSvg {...defaultProps} /> }
