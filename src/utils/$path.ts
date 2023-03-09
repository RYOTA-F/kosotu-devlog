export const pagesPath = {
  "$404": {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  "blog": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  "category": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/category/[id]' as const, query: { id }, hash: url?.hash }),
      _pageId: (pageId: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/category/[id]/[pageId]' as const, query: { id, pageId }, hash: url?.hash })
      })
    })
  },
  "disclaimer": {
    $url: (url?: { hash?: string }) => ({ pathname: '/disclaimer' as const, hash: url?.hash })
  },
  "page": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/page/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  "privacy_policy": {
    $url: (url?: { hash?: string }) => ({ pathname: '/privacy-policy' as const, hash: url?.hash })
  },
  "profile": {
    $url: (url?: { hash?: string }) => ({ pathname: '/profile' as const, hash: url?.hash })
  },
  "sitemap": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sitemap' as const, hash: url?.hash })
  },
  "tag": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/tag/[id]' as const, query: { id }, hash: url?.hash }),
      _pageId: (pageId: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/tag/[id]/[pageId]' as const, query: { id, pageId }, hash: url?.hash })
      })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
