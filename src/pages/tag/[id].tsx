import { useEffect } from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
/* Components */
import TagDetail from '@/components/organisms/TagDetail'
/* Const */
import { API, PAGE } from '@/const/index'
/* Hooks */
import useBlogData from '@/src/hooks/useBlogData'
import useCommonData from '@/src/hooks/useCommonData'
import useTagData from '@/src/hooks/useTagData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { ITag, IBreadCrumb, ITagApiResponse } from '@/types/index'
import { ISeoState } from '@/stores/common'
/* Utils */
import { getBreadCrumbDataFromFixed, getSeoFromTag } from '@/utils/index'

export interface ITagPage {
  tag: ITag
  breadCrumb: IBreadCrumb
  seo: ISeoState
}

const TagPage: NextPage<ITagPage> = ({ tag, breadCrumb, seo }) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const { setBreadCrumb, resetBreadCrumb, setSeo, resetSeo } = useCommonData()
  const { setTag, resetTag } = useTagData()

  useEffect(() => {
    setBlogs(tag.blogs)
    setBreadCrumb(breadCrumb)
    setTag(tag)
    setSeo(seo)

    return () => {
      resetBlogs()
      resetBreadCrumb()
      resetTag()
      resetSeo()
    }
  }, [tag, seo])

  return (
    <DefaultLayout>
      <TagDetail />
    </DefaultLayout>
  )
}

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

  // タグIDを指定しデータを取得
  const { contents } = await client.get<ITagApiResponse>({
    endpoint: API.TAG.END_POINT,
    queries: { ids: id },
  })

  // パンくず情報を取得
  const breadCrumb = getBreadCrumbDataFromFixed(contents[0].name)
  // SEO情報を取得
  const seo = getSeoFromTag(contents[0])

  return {
    props: {
      tag: contents[0],
      breadCrumb,
      seo,
    },
  }
}

export default TagPage
