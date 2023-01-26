import type { GetStaticProps } from 'next'
import { PAGINATION } from '@/const/index'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/logic/usecase/microCMS/blog'
/* Types */
import { IPaginationState } from '@/stores/common'
/* Utils */
import { checkContextId, getPageOffset } from '@/utils/index'

/**
 * 静的ページ用のブログ一覧情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()

  // IDチェック
  const id = checkContextId(context.params.id)

  // オフセット量取得
  const offset = getPageOffset(id)

  // ブログ取得
  const { blogs, totalPage } = await microCmsUsecaseBlog.getBlogs({ offset })

  // ページネーション生成
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
