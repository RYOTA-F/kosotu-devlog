import { useEffect } from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
/* Client */
import { client } from '@/libs/index'
/* Const */
import { API, MAX_BLOG_COUNT, PAGE } from '@/const/index'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import BlogCardList from '@/components/organisms/BlogCardList'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
/* Types */
import { IBlogsApiResponse, IBlog } from '@/types/index'

interface IPage {
  blogs: IBlog[]
  totalCount: number
}

const Page: NextPage<IPage> = ({ blogs }) => {
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
 * ページID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
  })

  const pageCount = Math.ceil(blogs.totalCount / MAX_BLOG_COUNT) - 1
  const pageNumbers = [...Array(pageCount)].map((_, i) => pageCount + i)
  const paths = pageNumbers.map((id) => `${PAGE.PAGE}${id}`)

  return {
    paths,
    fallback: false,
  }
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
      totalCount: blogs.totalCount,
    },
  }
}

export default Page
