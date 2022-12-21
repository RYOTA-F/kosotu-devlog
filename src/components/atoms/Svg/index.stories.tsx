import { FC } from 'react'
import { Story } from '@storybook/react'

import { TimeSvg } from './'
import { defaultProps } from './__mocks__'
import { ISvgDefaultProps } from './types'

const Svg: FC<ISvgDefaultProps> = ({ width, height }) => {
  return (
    <>
      <TimeSvg width={width} height={height} />
    </>
  )
}

export default {
  title: 'Atoms/Svg',
  component: Svg,
}

const Template: Story<ISvgDefaultProps> = (args) => <Svg {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
