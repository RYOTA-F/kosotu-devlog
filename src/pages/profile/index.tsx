import type { NextPage } from 'next'
/* Components */
import Profile from '@/components/organisms/Profile'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'

const ProfilePage: NextPage = () => {
  return (
    <DefaultLayout>
      <Profile />
    </DefaultLayout>
  )
}

export default ProfilePage
