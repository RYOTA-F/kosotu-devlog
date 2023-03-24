import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticProps } from './index.props'
/* Const */
import { FIXED_PAGE } from '@/const/index'
/* Components */
import Layout from '@/components/Layout'
/* Features */
import Disclaimer, { DISCLAIMER } from '@/features/disclaimer/DisclaimerDetail'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Types */
import { IGlobalMenu } from '@/types/index'
/* Utils */
import { getBreadCrumbDataFromFixed, getSeoFromFixed } from '@/utils/index'

interface IDisclaimer {
  globalMenu: IGlobalMenu[]
}

const DisclaimerPage: NextPage<IDisclaimer> = ({ globalMenu }) => {
  const {
    setGlobalMenu,
    resetGlobalMenu,
    setBreadCrumb,
    resetBreadCrumb,
    setSeo,
    resetSeo,
  } = useCommonData()

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(DISCLAIMER.TITEL)
    const seo = getSeoFromFixed(FIXED_PAGE.DISCLAIMER)
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
    <Layout>
      <Disclaimer />
    </Layout>
  )
}

export default DisclaimerPage
export { getStaticProps }
