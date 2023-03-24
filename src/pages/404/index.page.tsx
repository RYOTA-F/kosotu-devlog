import type { NextPage } from 'next'
/* Components */
import PageNotFound from '@/features/notFound/PageNotFound'
/* Layouts */
import Layout from '@/components/Layout'

const DisclaimerPage: NextPage = () => {
  return (
    <Layout>
      <PageNotFound />
    </Layout>
  )
}

export default DisclaimerPage
