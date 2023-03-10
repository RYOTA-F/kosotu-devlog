import type { GetStaticPaths } from 'next'
/* Const */
import { PAGE } from '@/const/index'
/* Logic */
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'

/**
 * カテゴリID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // カテゴリ一覧取得
  const { categories } = await microCmsUsecaseCategory.getCategories()

  // ページパス生成
  const paths = categories.map(({ id }) => `${PAGE.CATEGORY}${id}`)

  return {
    paths,
    fallback: false,
  }
}
