export const CATEGORY_PARENT = {
  FRONT_END: { ID: 'front-end', NAME: 'フロントエンド' },
  BACK_END: { ID: 'back-end', NAME: 'バックエンド' },
  INFRA: { ID: 'infra', NAME: 'インフラ' },
  CAREER: { ID: 'career', NAME: 'キャリア' },
  EVENT: { ID: 'event', NAME: 'イベント' },
  OTHERS: { ID: 'others', NAME: 'その他' },
} as const

export const CATEGORY_PARENT_LIST = Object.values(CATEGORY_PARENT)
