import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'
/* Types */
import { IPaginationState } from '@/stores/common'
/* Utils */
import { checkContextId } from '@/utils/index'

/**
 * 静的ページ用のカテゴリ情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // IDチェック
  const id = checkContextId(context.params.id)

  // カテゴリ取得
  const { category, blogs, totalPage, breadCrumb, seo } =
    await microCmsUsecaseCategory.getCategoryById({ id, limit: true })

  // グローバルメニュー取得
  const globalMenu = await microCmsUsecaseCategory.getGlobalMenu()

  // ページネーション生成
  const pagination: IPaginationState = {
    currentPage: 1,
    totalPage,
  }

  return {
    props: {
      category,
      blogs,
      pagination,
      breadCrumb,
      seo,
      globalMenu,
    },
  }
}
