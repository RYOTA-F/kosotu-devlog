import type { NextPage } from 'next'
/* Components */
import Disclaimer from '@/components/organisms/Disclaimer'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'

const DisclaimerPage: NextPage = () => {
  return (
    <DefaultLayout>
      <Disclaimer />
    </DefaultLayout>
  )
}

export default DisclaimerPage
