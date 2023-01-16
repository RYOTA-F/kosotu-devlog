import { ISitemapState } from '@/stores/sitemap'

export const sitemapStateMock: ISitemapState['sitemap'] = [
  {
    id: 'parent1',
    name: 'Parent1',
    url: '/category/parent1',
    children: [
      {
        id: 'children1',
        name: 'Children1',
        url: '/category/children1',
        parent: 'parent1',
        blogs: [
          {
            title: 'blog1',
            url: '/blog/blog1',
            category: 'children1',
          },
          {
            title: 'blog2',
            url: '/blog/blog2',
            category: 'children1',
          },
        ],
      },
      {
        id: 'children2',
        name: 'Children2',
        url: '/category/children2',
        parent: 'parent1',
        blogs: [
          {
            title: 'blog3',
            url: '/blog/blog3',
            category: 'children2',
          },
          {
            title: 'blog4',
            url: '/blog/blog4',
            category: 'children2',
          },
        ],
      },
    ],
  },
]
