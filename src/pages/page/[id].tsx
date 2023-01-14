import { useEffect } from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
/* Client */
import { client } from '@/libs/index'
/* Const */
import { API, MAX_BLOG_COUNT, PAGINATION } from '@/const/index'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import BlogCardList from '@/components/organisms/BlogCardList'
import Pagination from '@/components/organisms/Pagination'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCommonData from '@/hooks/useCommonData'
/* Types */
import { IBlogsApiResponse, IBlog } from '@/types/index'
/* Utils */
import { getPageOffset, getPagePaths, getTotalPage } from '@/utils/index'

interface IPage {
  blogs: IBlog[]
  pageId: number
  totalPage: number
}

const Page: NextPage<IPage> = ({ blogs, pageId, totalPage }) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const { setPagination, resetPagination } = useCommonData()

  useEffect(() => {
    setBlogs(blogs)
    setPagination({
      currentPage: pageId,
      totalPage: totalPage,
      type: PAGINATION.BLOG,
    })

    return () => {
      resetBlogs()
      resetPagination()
    }
  }, [blogs, pageId])

  return (
    <DefaultLayout>
      <BlogCardList />
      <Pagination />
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

  // ページ数の合計を取得
  const totalPage = getTotalPage(blogs.totalCount)

  return {
    props: {
      blogs: blogs.contents,
      pageId: parseInt(id),
      totalPage,
    },
  }
}

export default Page
