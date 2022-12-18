import type { GetStaticProps, NextPage } from 'next'
/* Client */
import { client } from '@/lib/client'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import BlogCardList from '@/components/assembles/BlogCardList'
/* Types */
import { IBlogsApiResponse, IBlog } from '@/types/index'

const BLOGS_PAGE_LIMIT_COUNT = 10 as const

interface IHome {
  contents: IBlog[]
}

const Home: NextPage<IHome> = ({ contents }) => {
  return (
    <DefaultLayout>
      <BlogCardList contents={contents} />
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: 'blogs',
    queries: { limit: BLOGS_PAGE_LIMIT_COUNT },
  })

  return {
    props: {
      contents: blogs.contents,
    },
  }
}

export default Home
