import { useEffect } from 'react'
import type { GetStaticProps, NextPage } from 'next'
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
import { getTotalPage } from '@/utils/index'

const HOME_PAGE_ID = 1 as const

interface IHome {
  blogs: IBlog[]
  pagination: IPaginationState
}

const Home: NextPage<IHome> = ({ blogs, pagination }) => {
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
 * 静的ページ用のブログ一覧情報を取得
 */
export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
    queries: {
      limit: MAX_BLOG_COUNT,
    },
  })

  // ページ数の合計を取得
  const totalPage = getTotalPage(blogs.totalCount)
  // ページネーション情報
  const pagination: IPaginationState = {
    currentPage: HOME_PAGE_ID,
    totalPage: totalPage,
    type: PAGINATION.BLOG,
  }

  return {
    props: {
      blogs: blogs.contents,
      pagination,
    },
  }
}

export default Home
