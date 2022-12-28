import { ReactNode } from 'react'
import { Story } from '@storybook/react'

import { H1 as _H1, H2 as _H2, H4 as _H4 } from '.'
import { defaultProps } from './__mocks__'

const Heading = ({ children }: { children: ReactNode }) => <>{children}</>

export default {
  title: 'Atoms/Heading',
  component: Heading,
}

const Template: Story<{ children: ReactNode }> = (args) => (
  <Heading>{args.children}</Heading>
)

export const H1 = Template.bind({})
H1.args = { children: <_H1>{defaultProps}</_H1> }

export const H2 = Template.bind({})
H2.args = { children: <_H2>{defaultProps}</_H2> }

export const H4 = Template.bind({})
H4.args = { children: <_H4>{defaultProps}</_H4> }
