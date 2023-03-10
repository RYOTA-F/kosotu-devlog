import type { GetStaticPaths } from 'next'
/* Logic */
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'
/* Utils */
import { getPagePaths } from '@/utils/index'

/**
 * ページID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // カテゴリ一覧取得
  const { categories } = await microCmsUsecaseCategory.getCategories()

  const paths: string[] = []

  // ページパス生成
  for (const category of categories) {
    const { totalPage } = await microCmsUsecaseCategory.getCategoryById({
      id: category.id,
    })
    const categoryPaths = getPagePaths(totalPage, 'category', category.id)
    paths.push(...categoryPaths)
  }

  return {
    paths,
    fallback: false,
  }
}
