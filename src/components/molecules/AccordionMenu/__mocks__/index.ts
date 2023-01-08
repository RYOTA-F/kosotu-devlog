import { IAccordionMenu } from '..'

export const defaultProps: IAccordionMenu = {
  label: 'フロントエンド',
  path: '/category/front-end',
  menuList: [
    { label: 'React', path: '/category/react' },
    { label: 'Vue.js', path: '/category/vue' },
  ],
}
