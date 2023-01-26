import { IS_DEVELOPMENT } from '.'

describe('IS_DEVELOPMENT', () => {
  test('false が返る', () => {
    expect(IS_DEVELOPMENT).toEqual(false)
  })
})
