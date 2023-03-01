import { getTotalPage } from '.'

describe('getPagePaths', () => {
  test.todo('typeにより分岐')
  // test.each`
  //   totalPage | pagePaths
  //   ${1}      | ${[]}
  //   ${2}      | ${['/page/2']}
  //   ${3}      | ${['/page/2', '/page/3']}
  //   ${4}      | ${['/page/2', '/page/3', '/page/4']}
  //   ${5}      | ${['/page/2', '/page/3', '/page/4', '/page/5']}
  //   ${6}      | ${['/page/2', '/page/3', '/page/4', '/page/5', '/page/6']}
  //   ${7}      | ${['/page/2', '/page/3', '/page/4', '/page/5', '/page/6', '/page/7']}
  //   ${8}      | ${['/page/2', '/page/3', '/page/4', '/page/5', '/page/6', '/page/7', '/page/8']}
  //   ${9}      | ${['/page/2', '/page/3', '/page/4', '/page/5', '/page/6', '/page/7', '/page/8', '/page/9']}
  //   ${10}     | ${['/page/2', '/page/3', '/page/4', '/page/5', '/page/6', '/page/7', '/page/8', '/page/9', '/page/10']}
  // `(
  //   '投稿数が $totalPage の時ページパス $pagePaths を取得できる',
  //   ({ totalPage, pagePaths }: { totalPage: number; pagePaths: string[] }) => {
  //     const result = getPagePaths(totalPage)
  //     expect(result).toEqual(pagePaths)
  //   }
  // )
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
