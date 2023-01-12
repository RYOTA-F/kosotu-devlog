import { useEffect } from 'react'
import type { GetStaticProps, NextPage } from 'next'
/* Client */
import { client } from '@/libs/index'
/* Const */
import { API, MAX_BLOG_COUNT } from '@/const/index'
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
  }, [blogs])

  return (
    <DefaultLayout>
      <BlogCardList />
    </DefaultLayout>
  )
}

/**
 * 静的ページ用のブログ一覧情報を取得
 */
export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
    queries: {
      limit: MAX_BLOG_COUNT,
    },
  })

  return {
    props: {
      blogs: blogs.contents,
    },
  }
}

export default Home
