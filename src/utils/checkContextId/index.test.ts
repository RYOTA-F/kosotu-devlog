import { checkContextId } from '.'

describe('checkContextId', () => {
  test('string を渡すと 引数がそのまま返る', () => {
    const mock = 'test'
    const result = checkContextId(mock)

    expect(result).toEqual(mock)
  })

  test('stringの配列 を渡すと 一つ目のstring が返る', () => {
    const mock = ['test1', 'test2', 'test3']
    const result = checkContextId(mock)

    expect(result).toEqual(mock[0])
  })

  test('undefined を渡すと 空のstring が返る', () => {
    const mock = undefined
    const returnMock = ''
    const result = checkContextId(mock)

    expect(result).toEqual(returnMock)
  })
})
