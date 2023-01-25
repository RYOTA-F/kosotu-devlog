import type { GetStaticPaths } from 'next'
/* Const */
import { API, PAGE } from '@/const/index'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { ICategoryApiResponse } from '@/types/microCMS/category'

/**
 * カテゴリID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await client.get<ICategoryApiResponse>({
    endpoint: API.CATEGORY.END_POINT,
    // デフォルトで limitが10件 になるのを解除
    queries: { limit: 9999 },
  })

  const paths = categories.contents.map(({ id }) => `${PAGE.CATEGORY}${id}`)

  return {
    paths,
    fallback: false,
  }
}
