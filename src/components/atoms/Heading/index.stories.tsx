import { ReactNode } from 'react'
import { Story } from '@storybook/react'

import { H1 as _H1, H2 as _H2, H3 as _H3 } from '.'
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

export const H3 = Template.bind({})
H3.args = { children: <_H3>{defaultProps}</_H3> }
