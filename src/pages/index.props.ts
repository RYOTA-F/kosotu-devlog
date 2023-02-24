import type { GetStaticProps } from 'next'
/* Const */
import { PAGINATION } from '@/const/index'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/logic/usecase/microCMS/blog'
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'
/* Types */
import { IPaginationState } from '@/stores/common'

const HOME_PAGE_ID = 1 as const

/**
 * 静的ページ用のブログ一覧情報を取得
 */
export const getStaticProps: GetStaticProps = async () => {
  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()
  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // ブログ一覧取得
  const { blogs, totalPage } = await microCmsUsecaseBlog.getBlogs({
    limit: true,
  })

  // グローバルメニュー取得
  const globalMenu = await microCmsUsecaseCategory.getGlobalMenu()

  // ページネーション生成
  const pagination: IPaginationState = {
    currentPage: HOME_PAGE_ID,
    totalPage: totalPage,
    type: PAGINATION.BLOG,
  }

  return {
    props: {
      blogs,
      pagination,
      globalMenu,
    },
  }
}
