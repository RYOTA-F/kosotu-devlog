import type { NextPage } from 'next'
/* Components */
import PageNotFound from '@/components/assembles/PageNotFound'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'

const DisclaimerPage: NextPage = () => {
  return (
    <DefaultLayout>
      <PageNotFound />
    </DefaultLayout>
  )
}

export default DisclaimerPage
