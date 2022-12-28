import type { NextPage } from 'next'
/* Components */
import PrivacyPolicy from '@/components/assembles/PrivacyPolicy'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'

const PrivacyPolicyPage: NextPage = () => {
  return (
    <DefaultLayout>
      <PrivacyPolicy />
    </DefaultLayout>
  )
}

export default PrivacyPolicyPage
