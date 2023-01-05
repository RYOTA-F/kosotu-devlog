import { useEffect } from 'react'
import type { GetStaticProps, NextPage } from 'next'
/* Client */
import { client } from '@/libs/microCMS'
/* Const */
import { API } from '@/const/index'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import BlogCardList from '@/components/organisms/BlogCardList'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
/* Types */
import { IBlogsApiResponse, IBlog } from '@/types/index'

interface IHome {
  blogs: IBlog[]
}

const Home: NextPage<IHome> = ({ blogs }) => {
  const { setBlogs, resetBlogs } = useBlogData()

  useEffect(() => {
    setBlogs(blogs)

    return () => {
      resetBlogs()
    }
  }, [blogs, setBlogs, resetBlogs])

  return (
    <DefaultLayout>
      <BlogCardList />
    </DefaultLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
    queries: API.BLOG.QUERY,
  })

  return {
    props: {
      blogs: blogs.contents,
    },
  }
}

export default Home
