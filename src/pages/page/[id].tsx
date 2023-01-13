import { useEffect } from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
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
/* Utils */
import { getPageOffset, getPagePaths } from '@/utils/index'

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

  // ページのパスを取得
  const paths = getPagePaths(blogs.totalCount)

  return {
    paths,
    fallback: false,
  }
}

/**
 * 静的ページ用のブログ一覧情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  // ページIDを取得
  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  // オフセット量を取得
  const offset = getPageOffset(id)

  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
    queries: {
      offset,
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