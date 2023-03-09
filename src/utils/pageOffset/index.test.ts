import { getPageOffset } from '.'

describe('getPageOffset', () => {
  test.each`
    page    | offset
    ${'1'}  | ${0}
    ${'2'}  | ${10}
    ${'3'}  | ${20}
    ${'4'}  | ${30}
    ${'5'}  | ${40}
    ${'6'}  | ${50}
    ${'7'}  | ${60}
    ${'8'}  | ${70}
    ${'9'}  | ${80}
    ${'10'} | ${90}
  `(
    'ページ$page の時オフセット量 $offset を取得できる',
    ({ page, offset }: { page: string; offset: number }) => {
      const result = getPageOffset(page)
      expect(result).toEqual(offset)
    }
  )
})
