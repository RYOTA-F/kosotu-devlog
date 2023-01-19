import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import DefaultLayout, { ARIA_LABEL } from '.'
import CommonContextProviderMock from '@/stores/__mocks__/common'
import { ARIA_LABEL as HEADER_ARIA_LABEL } from '@/components/organisms/Header'
import { ARIA_LABEL as FOOTER_ARIA_LABEL } from '@/components/organisms/Footer'
import { ARIA_LABEL as BREADCRUMB_ARIA_LABEL } from '@/components/molecules/BreadCrumb'
import { ARIA_LABEL as PROFILE_ARIA_LABEL } from '@/components/molecules/Profile'
import { defaultProps } from './__mocks__'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    }
  },
}))

describe('DefaultLayout', () => {
  beforeEach(() => {
    render(
      <CommonContextProviderMock>
        <DefaultLayout>{defaultProps}</DefaultLayout>
      </CommonContextProviderMock>
    )
  })

  test('描画される', () => {
    const defaultLayoutElement = screen.getByLabelText(
      ARIA_LABEL.DEFAULT_LAYOUT
    )
    expect(defaultLayoutElement).toBeInTheDocument()
  })

  describe('Header', () => {
    test('描画される', () => {
      const headerElement = screen.getByLabelText(HEADER_ARIA_LABEL.HEADER)
      expect(headerElement).toBeInTheDocument()
    })
  })

  describe('BreadCrumb', () => {
    test('描画される', () => {
      const breadCrumbElement = screen.getByLabelText(
        BREADCRUMB_ARIA_LABEL.BREAD_CRUMB
      )
      expect(breadCrumbElement).toBeInTheDocument()
    })
  })

  describe('Profile', () => {
    test('描画される', () => {
      const profileElement = screen.getByLabelText(PROFILE_ARIA_LABEL.PROFILE)
      expect(profileElement).toBeInTheDocument()
    })
  })

  describe('Footer', () => {
    test('描画される', () => {
      const footerElement = screen.getByLabelText(FOOTER_ARIA_LABEL.FOOTER)
      expect(footerElement).toBeInTheDocument()
    })
  })
})
