import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticProps } from './index.props'
/* Components */
import ProfileDetail, { PROFILE } from '@/features/profile/ProfileDetail'
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

interface IProfile {
  globalMenu: IGlobalMenu[]
}

const ProfilePage: NextPage<IProfile> = ({ globalMenu }) => {
  const {
    setGlobalMenu,
    resetGlobalMenu,
    setBreadCrumb,
    resetBreadCrumb,
    setSeo,
    resetSeo,
  } = useCommonData()

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(PROFILE.TITLE)
    const seo = getSeoFromFixed(FIXED_PAGE.PROFILE)
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
      <ProfileDetail />
    </DefaultLayout>
  )
}

export default ProfilePage
export { getStaticProps }
