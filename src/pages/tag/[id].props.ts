import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseTag } from '@/logic/usecase/microCMS/tag'
/* Utils */
import { checkContextId } from '@/src/utils/index'
/**
 * 静的ページ用のタグ情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  const microCmsUsecaseTag = new MicroCmsUsecaseTag()

  // IDチェック
  const id = checkContextId(context.params.id)

  // タグ取得
  const { tag, breadCrumb, seo } = await microCmsUsecaseTag.getTagById({ id })

  return {
    props: {
      tag,
      breadCrumb,
      seo,
    },
  }
}
