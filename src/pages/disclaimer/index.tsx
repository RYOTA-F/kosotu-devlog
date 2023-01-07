import { useEffect } from 'react'
import type { NextPage } from 'next'
/* Components */
import Disclaimer, { DISCLAIMER } from '@/components/organisms/Disclaimer'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Utils */
import { getBreadCrumbDataFromFixed } from '@/utils/index'

const DisclaimerPage: NextPage = () => {
  const { setBreadCrumb, resetBreadCrumb } = useCommonData()

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(DISCLAIMER.TITEL)
    setBreadCrumb(breadCrumb)

    return () => {
      resetBreadCrumb()
    }
  }, [])

  return (
    <DefaultLayout>
      <Disclaimer />
    </DefaultLayout>
  )
}

export default DisclaimerPage
