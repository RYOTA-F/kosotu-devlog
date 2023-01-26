import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/logic/usecase/microCMS/blog'

/**
 * 静的ページ用の投稿情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  // 投稿IDを取得
  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()

  // 投稿を取得
  const { blog, tableOfContents, breadCrumb, seo } =
    await microCmsUsecaseBlog.getBlogByID(id)

  return {
    props: {
      blog,
      tableOfContents,
      breadCrumb,
      seo,
    },
  }
}
