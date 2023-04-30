import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticProps } from './index.props'
/* Const */
import { FIXED_PAGE } from '@/const/index'
/* Components */
import Layout from '@/components/Layout'
/* Features */
import ProfileDetail, { PROFILE } from '@/features/profile/ProfileDetail'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Types */
import { IGlobalMenu } from '@/types/index'
/* Utils */
import { getBreadCrumbDataFromFixed, getSeoFromFixed } from '@/utils/index'

interface IProfile {
  globalMenu: IGlobalMenu[]
}

const ProfilePage: NextPage<IProfile> = ({ globalMenu }) => {
  const { setGlobalMenu, resetGlobalMenu, setBreadCrumb, resetBreadCrumb } =
    useCommonData()

  const seo = getSeoFromFixed(FIXED_PAGE.PROFILE)

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(PROFILE.TITLE)

    setBreadCrumb(breadCrumb)
    setGlobalMenu(globalMenu)

    return () => {
      resetBreadCrumb()
      resetGlobalMenu()
    }
  }, [globalMenu])

  return (
    <Layout seo={seo}>
      <ProfileDetail />
    </Layout>
  )
}

export default ProfilePage
export { getStaticProps }
