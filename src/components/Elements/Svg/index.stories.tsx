import { ReactNode } from 'react'
import { Story } from '@storybook/react'

import {
  ChevronRightSvg as _ChevronRightSvg,
  FolderSvg as _FolderSvg,
  HomeSvg as _HomeSvg,
  TagSvg as _TagSvg,
  TimeSvg as _TimeSvg,
  ListSvg as _ListSvg,
  TwitterSvg as _TwitterSvg,
} from './'
import { defaultProps } from './__mocks__'

const Svg = ({ children }: { children: ReactNode }) => <>{children}</>

export default {
  title: 'Components/Elements/Svg',
  component: Svg,
}

const Template: Story<{ children: ReactNode }> = (args) => <Svg {...args} />

export const ChevronRightSvg = Template.bind({})
ChevronRightSvg.args = { children: <_ChevronRightSvg {...defaultProps} /> }

export const FolderSvg = Template.bind({})
FolderSvg.args = { children: <_FolderSvg {...defaultProps} /> }

export const HomeSvg = Template.bind({})
HomeSvg.args = { children: <_HomeSvg {...defaultProps} /> }

export const TagSvg = Template.bind({})
TagSvg.args = { children: <_TagSvg {...defaultProps} /> }

export const TimeSvg = Template.bind({})
TimeSvg.args = { children: <_TimeSvg {...defaultProps} /> }

export const ListSvg = Template.bind({})
ListSvg.args = { children: <_ListSvg {...defaultProps} /> }

export const TwitterSvg = Template.bind({})
TwitterSvg.args = { children: <_TwitterSvg {...defaultProps} /> }
