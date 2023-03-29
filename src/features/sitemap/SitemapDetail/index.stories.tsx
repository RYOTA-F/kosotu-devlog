import { Story } from '@storybook/react'

import SitemapDetail from '.'
import SitemapContextProviderMock from '@/stores/__mocks__/sitemap'

export default {
  title: 'Features/Sitemap/SitemapDetail',
  component: SitemapDetail,
}

const Template: Story = () => (
  <div className="w-[844px]">
    <SitemapDetail />
  </div>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <SitemapContextProviderMock>
      <Story />
    </SitemapContextProviderMock>
  ),
]
