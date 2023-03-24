import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticProps } from './index.props'
/* Components */
import PrivacyPolicy, {
  PRIVACY_POLICY,
} from '@/features/privacyPolicy/PrivacyPolicy'
/* Const */
import { FIXED_PAGE } from '@/const/index'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Types */
import { IGlobalMenu } from '@/types/index'
/* Utils */
import { getBreadCrumbDataFromFixed, getSeoFromFixed } from '@/utils/index'

interface IPrivacyPolicy {
  globalMenu: IGlobalMenu[]
}

const PrivacyPolicyPage: NextPage<IPrivacyPolicy> = ({ globalMenu }) => {
  const {
    setGlobalMenu,
    resetGlobalMenu,
    setBreadCrumb,
    resetBreadCrumb,
    setSeo,
    resetSeo,
  } = useCommonData()

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(PRIVACY_POLICY.TITLE)
    const seo = getSeoFromFixed(FIXED_PAGE.PRIVACY_POLICY)
    setBreadCrumb(breadCrumb)
    setSeo(seo)
    setGlobalMenu(globalMenu)

    return () => {
      resetBreadCrumb()
      resetSeo()
      resetGlobalMenu()
    }
  }, [globalMenu])

  return (
    <DefaultLayout>
      <PrivacyPolicy />
    </DefaultLayout>
  )
}

export default PrivacyPolicyPage
export { getStaticProps }
