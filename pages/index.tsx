import Link from 'next/link'
import Layout from '../components/Layout'
import Test from '../components/Test'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Test />
    <div>これはテストでスゥゥゥ！！！</div>
  </Layout>
)

export default IndexPage
