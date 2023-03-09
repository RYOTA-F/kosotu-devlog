import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/logic/usecase/microCMS/blog'
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'
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
  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // IDチェック
  const id = checkContextId(context.params.id)

  // オフセット量取得
  const offset = getPageOffset(id)

  // ブログ取得
  const { blogs, totalPage } = await microCmsUsecaseBlog.getBlogs({
    limit: true,
    offset,
  })

  // ページネーション生成
  const pagination: IPaginationState = {
    currentPage: parseInt(id),
    totalPage,
  }

  // グローバルメニュー取得
  const globalMenu = await microCmsUsecaseCategory.getGlobalMenu()

  return {
    props: {
      blogs,
      pagination,
      globalMenu,
    },
  }
}
