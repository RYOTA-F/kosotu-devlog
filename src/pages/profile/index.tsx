import { useEffect } from 'react'
import type { NextPage } from 'next'
/* Components */
import Profile, { PROFILE } from '@/components/organisms/Profile'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Utils */
import { getBreadCrumbDataFromFixed } from '@/utils/index'

const ProfilePage: NextPage = () => {
  const { setBreadCrumb, resetBreadCrumb } = useCommonData()

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(PROFILE.TITLE)
    setBreadCrumb(breadCrumb)

    return () => {
      resetBreadCrumb()
    }
  }, [])

  return (
    <DefaultLayout>
      <Profile />
    </DefaultLayout>
  )
}

export default ProfilePage
