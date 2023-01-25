import type { GetStaticPaths } from 'next'
/* Const */
import { API, PAGE } from '@/const/index'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { IBlogsApiResponse } from '@/types/index'

/**
 * 投稿ID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
    // デフォルトで limitが10件 になるのを解除
    queries: { limit: 9999 },
  })
  const paths = blogs.contents.map(({ id }) => `${PAGE.BLOG}${id}`)

  return {
    paths,
    fallback: false,
  }
}
