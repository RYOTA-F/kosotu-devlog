import type { GetStaticPaths } from 'next'
/* Const */
import { API, PAGE } from '@/const/index'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { ITagApiResponse } from '@/types/index'

/**
 * タグID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await client.get<ITagApiResponse>({
    endpoint: API.TAG.END_POINT,
    // デフォルトで limitが10件 になるのを解除
    queries: { limit: 9999 },
  })

  const paths = tags.contents.map(({ id }) => `${PAGE.TAG}${id}`)

  return {
    paths,
    fallback: false,
  }
}
