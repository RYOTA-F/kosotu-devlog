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
import { IPaginationState } from '@/stores/common'
/* Utils */
import { getPageOffset, getPagePaths, getTotalPage } from '@/utils/index'

interface IPage {
  blogs: IBlog[]
  pagination: IPaginationState
}

const Page: NextPage<IPage> = ({ blogs, pagination }) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const { setPagination, resetPagination } = useCommonData()

  useEffect(() => {
    setBlogs(blogs)
    setPagination(pagination)

    return () => {
      resetBlogs()
      resetPagination()
    }
  }, [blogs, pagination])

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
  // ページネーション情報
  const pagination: IPaginationState = {
    currentPage: parseInt(id),
    totalPage,
    type: PAGINATION.BLOG,
  }

  return {
    props: {
      blogs: blogs.contents,
      pagination,
    },
  }
}

export default Page
