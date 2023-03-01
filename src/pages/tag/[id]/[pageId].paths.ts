import type { GetStaticPaths } from 'next'
/* Logic */
import { MicroCmsUsecaseTag } from '@/logic/usecase/microCMS/tag'
/* Utils */
import { getPagePaths } from '@/utils/index'

/**
 * タグID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const microCmsUsecaseTag = new MicroCmsUsecaseTag()

  // タグ一覧取得
  const { tags } = await microCmsUsecaseTag.getTags()

  const paths: string[] = []

  // ページパス生成
  for (const tag of tags) {
    const { totalPage } = await microCmsUsecaseTag.getTagById({
      id: tag.id,
    })
    const tagPaths = getPagePaths(totalPage, 'tag', tag.id)
    paths.push(...tagPaths)
  }

  return {
    paths,
    fallback: false,
  }
}
