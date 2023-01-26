import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseBlog } from '@/logic/usecase/microCMS/blog'
/* Utils */
import { checkContextId } from '@/src/utils/index'

/**
 * 静的ページ用の投稿情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  const microCmsUsecaseBlog = new MicroCmsUsecaseBlog()

  // IDチェック
  const id = checkContextId(context.params.id)

  // 投稿取得
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
