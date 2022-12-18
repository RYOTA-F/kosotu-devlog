import { Story } from '@storybook/react'

import TimeSvg from './TimeSvg'
import { ISvgDefaultProps } from './types'

const defaultProps: ISvgDefaultProps = {
  width: 40,
  height: 40,
}

export default {
  title: 'Atoms/Svg',
  component: TimeSvg,
}

const Template: Story<ISvgDefaultProps> = (args) => <TimeSvg {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
