import type { NextPage } from 'next'
/* Components */
import Layout from '@/components/Layout'
/* Features */
import PageNotFound from '@/features/notFound/PageNotFound'

const DisclaimerPage: NextPage = () => {
  return (
    <Layout>
      <PageNotFound />
    </Layout>
  )
}

export default DisclaimerPage
