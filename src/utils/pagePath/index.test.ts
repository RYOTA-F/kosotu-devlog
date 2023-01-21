import { getPagePaths, getTotalPage } from '.'

describe('getPagePaths', () => {
  test.each`
    totalCount | pagePaths
    ${1}       | ${[]}
    ${11}      | ${['/page/2']}
    ${21}      | ${['/page/2', '/page/3']}
    ${31}      | ${['/page/2', '/page/3', '/page/4']}
    ${41}      | ${['/page/2', '/page/3', '/page/4', '/page/5']}
    ${51}      | ${['/page/2', '/page/3', '/page/4', '/page/5', '/page/6']}
    ${61}      | ${['/page/2', '/page/3', '/page/4', '/page/5', '/page/6', '/page/7']}
    ${71}      | ${['/page/2', '/page/3', '/page/4', '/page/5', '/page/6', '/page/7', '/page/8']}
    ${81}      | ${['/page/2', '/page/3', '/page/4', '/page/5', '/page/6', '/page/7', '/page/8', '/page/9']}
    ${91}      | ${['/page/2', '/page/3', '/page/4', '/page/5', '/page/6', '/page/7', '/page/8', '/page/9', '/page/10']}
  `(
    '投稿数が $totalCount の時ページパス $pagePaths を取得できる',
    ({
      totalCount,
      pagePaths,
    }: {
      totalCount: number
      pagePaths: string[]
    }) => {
      const result = getPagePaths(totalCount)
      expect(result).toEqual(pagePaths)
    }
  )
})

describe('getTotalPage', () => {
  test.each`
    totalCount | resultPage
    ${1}       | ${1}
    ${11}      | ${2}
    ${21}      | ${3}
    ${31}      | ${4}
    ${41}      | ${5}
    ${51}      | ${6}
    ${61}      | ${7}
    ${71}      | ${8}
    ${81}      | ${9}
    ${91}      | ${10}
  `(
    `totalCount が $totalCount の時 ページ数 $resultPage が取得できる`,
    ({
      totalCount,
      resultPage,
    }: {
      totalCount: number
      resultPage: number
    }) => {
      const result = getTotalPage(totalCount)
      expect(result).toEqual(resultPage)
    }
  )
})
