import type { GetStaticProps } from 'next'
/* Client */
import { client } from '@/libs/index'
/* Const */
import { API, MAX_BLOG_COUNT, PAGINATION } from '@/const/index'
/* Types */
import { IBlogsApiResponse } from '@/types/index'
import { IPaginationState } from '@/stores/common'
/* Utils */
import { getTotalPage } from '@/utils/index'

const HOME_PAGE_ID = 1 as const

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
