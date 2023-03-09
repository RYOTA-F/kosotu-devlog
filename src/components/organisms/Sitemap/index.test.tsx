import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Sitemap, { ARIA_LABEL } from '.'
import { ARIA_LABEL as HEADING_ARIA_LABEL } from '@/components/atoms/Heading'
import { ARIA_LABEL as SITEMAP_ITEM_ARIA_LABEL } from '@/components/atoms/SitemapItem'
import SitemapContextProvider from '@/stores/__mocks__/sitemap'
import { sitemapStateMock } from '@/stores/__mocks__/sitemap/mock'
import { SITE } from '@/const/index'

describe('Sitemap', () => {
  beforeEach(() => {
    render(
      <SitemapContextProvider>
        <Sitemap />
      </SitemapContextProvider>
    )
  })

  test('描画される', () => {
    const sitemapElement = screen.getByLabelText(ARIA_LABEL)
    expect(sitemapElement).toBeInTheDocument()
  })

  describe('H1', () => {
    test('描画される', () => {
      const h1Element = screen.getByLabelText(HEADING_ARIA_LABEL.H1)
      expect(h1Element).toBeInTheDocument()
    })
  })

  describe('SitemapItem', () => {
    test('ページの数だけ描画される', () => {
      const sitemapItemElements = screen.getAllByLabelText(
        SITEMAP_ITEM_ARIA_LABEL
      )

      const element: string[] = [SITE.TITLE]
      sitemapStateMock.forEach((parent) => {
        element.push(parent.name)

        parent.children.forEach((children) => {
          element.push(children.name)
          children.blogs.forEach((blog) => element.push(blog.title))
        })
      })

      expect(sitemapItemElements.length).toEqual(element.length)
      sitemapItemElements.forEach((element) =>
        expect(element).toBeInTheDocument()
      )
    })
  })
})
