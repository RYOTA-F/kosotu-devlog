export const PAGE_NOT_FOUND = {
  TITLE: 'ページが見つかりませんでした',
  MESSAGE: `お探しのページは移動または削除された可能性があります。
入力されたURLを再度ご確認下さい。`,
  IMAGE: {
    SRC: '/images/not_found_404.webp',
    ALT: '404 Not Found',
    WIDTH: 600,
    HEIGHT: 400,
  },
} as const

export const ARIA_LABEL = {
  PAGE_NOT_FOUND: 'pageNotFound',
} as const
