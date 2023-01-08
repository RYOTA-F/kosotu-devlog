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
import { ITag, ITagApiResponse } from '@/types/index'
/* Utils */
import { getBreadCrumbDataFromFixed } from '@/utils/index'

export interface ITagPage {
  tag: ITag
}

const TagPage: NextPage<ITagPage> = ({ tag }) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const { setBreadCrumb, resetBreadCrumb } = useCommonData()
  const { setTag, resetTag } = useTagData()

  useEffect(() => {
    const breadCrumb = getBreadCrumbDataFromFixed(tag.name)

    setBlogs(tag.blogs)
    setBreadCrumb(breadCrumb)
    setTag(tag)

    return () => {
      resetBlogs()
      resetBreadCrumb()
      resetTag()
    }
  }, [tag])

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
  })
  const paths = tags.contents.map(({ id }) => `${PAGE.TAG}/${id}`)

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

  return {
    props: {
      tag: contents[0],
    },
  }
}

export default TagPage
