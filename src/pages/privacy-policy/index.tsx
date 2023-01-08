import { useEffect } from 'react'
import type { NextPage } from 'next'
/* Components */
import PrivacyPolicy, {
  PRIVACY_POLICY,
} from '@/components/organisms/PrivacyPolicy'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Utils */
import { getBreadCrumbDataFromFixed } from '@/utils/index'

const PrivacyPolicyPage: NextPage = () => {
  const { setBreadCrumb, resetBreadCrumb } = useCommonData()

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(PRIVACY_POLICY.TITLE)
    setBreadCrumb(breadCrumb)

    return () => {
      resetBreadCrumb()
    }
  }, [])

  return (
    <DefaultLayout>
      <PrivacyPolicy />
    </DefaultLayout>
  )
}

export default PrivacyPolicyPage
