import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
/* Components */
import TagDetail from '@/components/assembles/TagDetail'
/* Const */
import { API, PAGE } from '@/const/index'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Lib */
import { client } from '@/lib/microCMS'
/* Types */
import { ITag, ITagApiResponse } from '@/types/index'

export interface ITagPage {
  contents: ITag
}

const TagPage: NextPage<ITagPage> = ({ contents }) => {
  return (
    <DefaultLayout>
      <TagDetail {...contents} />
    </DefaultLayout>
  )
}

/**
 * タグID毎にページパスを生成
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
 * タグ情報を取得し静的ページを生成
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
      contents: contents[0],
    },
  }
}

export default TagPage
