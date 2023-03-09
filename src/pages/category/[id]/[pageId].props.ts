import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'
/* Types */
import { IPaginationState } from '@/stores/common'
/* Utils */
import { checkContextId, getPageOffset } from '@/utils/index'

/**
 * 静的ページ用のカテゴリ情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // IDチェック
  const id = checkContextId(context.params.id)
  const pageId = checkContextId(context.params.pageId)

  // オフセット量取得
  const offset = getPageOffset(pageId)

  // ブログ取得
  const { category, blogs, breadCrumb, totalPage, seo } =
    await microCmsUsecaseCategory.getCategoryById({
      id,
      limit: true,
      offset,
    })

  // グローバルメニュー取得
  const globalMenu = await microCmsUsecaseCategory.getGlobalMenu()

  // ページネーション生成
  const pagination: IPaginationState = {
    currentPage: Number(pageId),
    totalPage,
  }

  return {
    props: {
      category,
      blogs,
      breadCrumb,
      pagination,
      globalMenu,
      seo,
    },
  }
}
