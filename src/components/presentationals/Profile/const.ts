export const ARIA_LABEL = {
  PROFILE: 'profile',
} as const

export const IMAGE = {
  PATH: '/images/ryota.png',
  ALT: 'ryota',
  WIDTH: 120,
  HEIGHT: 120,
} as const

export const DESCRIPTION = [
  {
    LABEL: 'キャリア',
    ITEMS: ['NCプログラマ', '人材系営業マン', 'Webエンジニア'],
  },
  {
    LABEL: 'スキル',
    ITEMS: ['TypeScript', 'React', 'Vue.js', 'Node.js', 'Ruby', 'AWS'],
  },
  {
    LABEL: '資格',
    ITEMS: ['キャリアコンサルティング技能士'],
  },
  {
    LABEL: 'その他',
    ITEMS: ['TSLab 運営', 'Developers Guild 運営'],
  },
] as const
