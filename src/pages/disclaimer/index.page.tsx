import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticProps } from './index.props'
/* Components */
import Disclaimer, { DISCLAIMER } from '@/features/disclaimer/DisclaimerDetail'
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
    <DefaultLayout>
      <Disclaimer />
    </DefaultLayout>
  )
}

export default DisclaimerPage
export { getStaticProps }
