import type { GetStaticPaths } from 'next'
/* Client */
import { client } from '@/libs/index'
/* Const */
import { API } from '@/const/index'
/* Types */
import { IBlogsApiResponse } from '@/types/index'
/* Utils */
import { getPagePaths } from '@/utils/index'

/**
 * ページID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
  })

  // ページのパスを取得
  const paths = getPagePaths(blogs.totalCount)

  return {
    paths,
    fallback: false,
  }
}
