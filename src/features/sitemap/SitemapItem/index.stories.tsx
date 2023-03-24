import React from 'react'
import { Story } from '@storybook/react'

import SitemapItem, { ISitemapItem } from '.'
import { defaultProps } from './__mocks__'

export default {
  title: 'Features/Sitemap/SitemapItem',
  component: SitemapItem,
}

const Template: Story<ISitemapItem> = (args) => <SitemapItem {...args} />

export const Normal = Template.bind({})
Normal.args = defaultProps
