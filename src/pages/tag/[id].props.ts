import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'
import { MicroCmsUsecaseTag } from '@/logic/usecase/microCMS/tag'
/* Utils */
import { checkContextId } from '@/src/utils/index'
/**
 * 静的ページ用のタグ情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()
  const microCmsUsecaseTag = new MicroCmsUsecaseTag()

  // IDチェック
  const id = checkContextId(context.params.id)
  // タグ取得
  const { tag, blogs, breadCrumb, seo } = await microCmsUsecaseTag.getTagById({
    id,
  })
  // グローバルメニュー取得
  const globalMenu = await microCmsUsecaseCategory.getGlobalMenu()

  return {
    props: {
      tag,
      blogs,
      breadCrumb,
      seo,
      globalMenu,
    },
  }
}
