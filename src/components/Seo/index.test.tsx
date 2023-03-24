import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Seo from '.'
import CommonContextProviderMock from '@/stores/__mocks__/common'
import { initialCommonState } from '@/stores/common'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: ReactNode }) => {
      return children
    },
  }
})

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    }
  },
}))

describe('Seo', () => {
  beforeEach(() => {
    render(
      <CommonContextProviderMock>
        <Seo />
      </CommonContextProviderMock>
    )
  })

  test('title が反映される', () => {
    expect(document.title).toBe(initialCommonState.seo.title)
  })

  test('description が反映される', () => {
    expect(
      document
        .querySelector('meta[name="description"]')
        ?.attributes.getNamedItem('content')?.value
    ).toBe(initialCommonState.seo.description)
  })

  test('url が反映される', () => {
    expect(
      document
        .querySelector('meta[property="og:url"]')
        ?.attributes.getNamedItem('content')?.value
    ).toBe(initialCommonState.seo.url)
  })

  test('image が反映される', () => {
    expect(
      document
        .querySelector('meta[property="og:image"]')
        ?.attributes.getNamedItem('content')?.value
    ).toBe(initialCommonState.seo.image)
  })

  test.todo('Blogページの場合 type が article になる')
})
