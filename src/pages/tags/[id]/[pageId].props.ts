import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'
import { MicroCmsUsecaseTag } from '@/logic/usecase/microCMS/tag'
/* Types */
import { IPaginationState } from '@/stores/common'
/* Utils */
import { checkContextId, getPageOffset } from '@/utils/index'

/**
 * 静的ページ用のタグ情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()
  const microCmsUsecaseTag = new MicroCmsUsecaseTag()

  // IDチェック
  const id = checkContextId(context.params.id)
  const pageId = checkContextId(context.params.pageId)

  // オフセット量取得
  const offset = getPageOffset(pageId)

  // タグ取得
  const { tag, blogs, totalPage, breadCrumb, seo } =
    await microCmsUsecaseTag.getTagById({
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
      tag,
      blogs,
      pagination,
      breadCrumb,
      globalMenu,
      seo,
    },
  }
}
