import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import SitemapDetail from '.'
import SitemapContextProviderMock from '@/stores/__mocks__/sitemap'

export default {
  title: 'Features/Sitemap/SitemapDetail',
  component: SitemapDetail,
}

const Template: Story = () => (
  <Wrapper>
    <SitemapDetail />
  </Wrapper>
)

export const Normal = Template.bind({})
Normal.decorators = [
  (Story) => (
    <SitemapContextProviderMock>
      <Story />
    </SitemapContextProviderMock>
  ),
]

const Wrapper = styled.div`
  width: 844px;
`
