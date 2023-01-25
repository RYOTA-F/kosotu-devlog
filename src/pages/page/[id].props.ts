import type { GetStaticProps } from 'next'
/* Client */
import { client } from '@/libs/index'
/* Const */
import { API, MAX_BLOG_COUNT, PAGINATION } from '@/const/index'
/* Types */
import { IBlogsApiResponse } from '@/types/index'
import { IPaginationState } from '@/stores/common'
/* Utils */
import { getPageOffset, getTotalPage } from '@/utils/index'

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
