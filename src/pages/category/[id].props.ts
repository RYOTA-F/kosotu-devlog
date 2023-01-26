import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'
/* Utils */
import { checkContextId } from '@/src/utils/index'

/**
 * 静的ページ用のカテゴリ情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // IDチェック
  const id = checkContextId(context.params.id)

  // カテゴリ取得
  const { category, breadCrumb, seo } =
    await microCmsUsecaseCategory.getCategoryById({ id })

  return {
    props: {
      category,
      breadCrumb,
      seo,
    },
  }
}
