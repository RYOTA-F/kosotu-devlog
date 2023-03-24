import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/logic/usecase/microCMS/blog'
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'
/* Utils */
import { checkContextId } from '@/utils/index'

/**
 * 静的ページ用の投稿情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()
  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // IDチェック
  const id = checkContextId(context.params.id)

  // 投稿取得
  const { blog, tableOfContents, breadCrumb, seo } =
    await microCmsUsecaseBlog.getBlogByID(id)

  // グローバルメニュー取得
  const globalMenu = await microCmsUsecaseCategory.getGlobalMenu()

  return {
    props: {
      blog,
      tableOfContents,
      breadCrumb,
      seo,
      globalMenu,
    },
  }
}
