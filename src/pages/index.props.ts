import type { GetStaticProps } from 'next'
/* Const */
import { PAGINATION } from '@/const/index'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/logic/usecase/microCMS/blog'
/* Types */
import { IPaginationState } from '@/stores/common'

const HOME_PAGE_ID = 1 as const

/**
 * 静的ページ用のブログ一覧情報を取得
 */
export const getStaticProps: GetStaticProps = async () => {
  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()

  // ブログ情報
  const { blogs, totalPage } = await microCmsUsecaseBlog.getBlogs()

  // ページネーション情報
  const pagination: IPaginationState = {
    currentPage: HOME_PAGE_ID,
    totalPage: totalPage,
    type: PAGINATION.BLOG,
  }

  return {
    props: {
      blogs,
      pagination,
    },
  }
}
