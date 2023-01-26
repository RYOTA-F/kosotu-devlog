import type { GetStaticPaths } from 'next'
/* Const */
import { PAGE } from '@/const/index'
/* Logic */
import { MicroCmsUsecaseTag } from '@/logic/usecase/microCMS/tag'

/**
 * タグID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const microCmsUsecaseTag = new MicroCmsUsecaseTag()

  // タグ一覧取得
  const { tags } = await microCmsUsecaseTag.getTags()

  // パス生成
  const paths = tags.map(({ id }) => `${PAGE.TAG}${id}`)

  return {
    paths,
    fallback: false,
  }
}
