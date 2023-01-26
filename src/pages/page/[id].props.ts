import type { GetStaticProps } from 'next'
import { PAGINATION } from '@/const/index'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/logic/usecase/microCMS/blog'
/* Types */
import { IPaginationState } from '@/stores/common'
/* Utils */
import { getPageOffset } from '@/utils/index'

/**
 * 静的ページ用のブログ一覧情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  // ページID
  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  // オフセット量
  const offset = getPageOffset(id)

  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()

  // ブログ情報
  const { blogs, totalPage } = await microCmsUsecaseBlog.getBlogs({ offset })

  // ページネーション情報
  const pagination: IPaginationState = {
    currentPage: parseInt(id),
    totalPage,
    type: PAGINATION.BLOG,
  }

  return {
    props: {
      blogs,
      pagination,
    },
  }
}
