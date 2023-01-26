import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'

/**
 * 静的ページ用のカテゴリ情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  // カテゴリIDを取得
  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // カテゴリを取得
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
