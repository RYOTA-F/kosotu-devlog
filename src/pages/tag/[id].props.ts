import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseTag } from '@/logic/usecase/microCMS/tag'

/**
 * 静的ページ用のタグ情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  // タグIDを取得
  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  const microCmsUsecaseTag = new MicroCmsUsecaseTag()

  // タグ情報を取得
  const { tag, breadCrumb, seo } = await microCmsUsecaseTag.getTagById({ id })

  return {
    props: {
      tag,
      breadCrumb,
      seo,
    },
  }
}
