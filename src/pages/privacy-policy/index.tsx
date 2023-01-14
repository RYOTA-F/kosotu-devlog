import { useEffect } from 'react'
import type { NextPage } from 'next'
/* Components */
import PrivacyPolicy, {
  PRIVACY_POLICY,
} from '@/components/organisms/PrivacyPolicy'
/* Const */
import { FIXED_PAGE } from '@/const/index'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Utils */
import { getBreadCrumbDataFromFixed, getSeoFromFixed } from '@/utils/index'

const PrivacyPolicyPage: NextPage = () => {
  const { setBreadCrumb, resetBreadCrumb, setSeo, resetSeo } = useCommonData()

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(PRIVACY_POLICY.TITLE)
    const seo = getSeoFromFixed(FIXED_PAGE.PRIVACY_POLICY)
    setBreadCrumb(breadCrumb)
    setSeo(seo)

    return () => {
      resetBreadCrumb()
      resetSeo()
    }
  }, [])

  return (
    <DefaultLayout>
      <PrivacyPolicy />
    </DefaultLayout>
  )
}

export default PrivacyPolicyPage
