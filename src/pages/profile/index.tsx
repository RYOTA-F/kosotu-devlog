import { useEffect } from 'react'
import type { NextPage } from 'next'
/* Components */
import Profile, { PROFILE } from '@/components/organisms/Profile'
/* Const */
import { FIXED_PAGE } from '@/const/index'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Utils */
import { getBreadCrumbDataFromFixed, getSeoFromFixed } from '@/utils/index'

const ProfilePage: NextPage = () => {
  const { setBreadCrumb, resetBreadCrumb, setSeo, resetSeo } = useCommonData()

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(PROFILE.TITLE)
    const seo = getSeoFromFixed(FIXED_PAGE.PROFILE)
    setBreadCrumb(breadCrumb)
    setSeo(seo)

    return () => {
      resetBreadCrumb()
      resetSeo()
    }
  }, [])

  return (
    <DefaultLayout>
      <Profile />
    </DefaultLayout>
  )
}

export default ProfilePage
