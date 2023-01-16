import { Story } from '@storybook/react'
import styled from '@emotion/styled'

import Sitemap from '.'
import SitemapContextProviderMock from '@/stores/__mocks__/sitemap'

export default {
  title: 'Organisms/Sitemap',
  component: Sitemap,
}

const Template: Story = () => (
  <Wrapper>
    <Sitemap />
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
