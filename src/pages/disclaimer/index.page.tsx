import { useEffect } from 'react'
import type { NextPage } from 'next'
/* Components */
import Disclaimer, { DISCLAIMER } from '@/components/organisms/Disclaimer'
/* Const */
import { FIXED_PAGE } from '@/const/index'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Utils */
import { getBreadCrumbDataFromFixed, getSeoFromFixed } from '@/utils/index'

const DisclaimerPage: NextPage = () => {
  const { setBreadCrumb, resetBreadCrumb, setSeo, resetSeo } = useCommonData()

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(DISCLAIMER.TITEL)
    const seo = getSeoFromFixed(FIXED_PAGE.DISCLAIMER)
    setBreadCrumb(breadCrumb)
    setSeo(seo)

    return () => {
      resetBreadCrumb()
      resetSeo()
    }
  }, [])

  return (
    <DefaultLayout>
      <Disclaimer />
    </DefaultLayout>
  )
}

export default DisclaimerPage
