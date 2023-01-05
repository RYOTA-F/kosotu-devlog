import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
/* Components */
import CategoryDetail from '@/components/assembles/CategoryDetail'
/* Const */
import { API, PAGE } from '@/const/index'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Lib */
import { client } from '@/libs/microCMS'
/* Types */
import { ICategory, ICategoryApiResponse } from '@/types/microCMS/category'

export interface ICategoryPage {
  contents: ICategory
}

const CategoryPage: NextPage<ICategoryPage> = ({ contents }) => {
  return (
    <DefaultLayout>
      <CategoryDetail {...contents} />
    </DefaultLayout>
  )
}

/**
 * カテゴリID毎にページパスを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await client.get<ICategoryApiResponse>({
    endpoint: API.CATEGORY.END_POINT,
  })
  const paths = categories.contents.map(({ id }) => `${PAGE.CATEGORY}/${id}`)

  return {
    paths,
    fallback: false,
  }
}

/**
 * カテゴリ情報を取得し静的ページを生成
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  // カテゴリIDを取得
  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  // カテゴリIDを指定しデータを取得
  const { contents } = await client.get<ICategoryApiResponse>({
    endpoint: API.CATEGORY.END_POINT,
    queries: { ids: id },
  })

  return {
    props: {
      contents: contents[0],
    },
  }
}

export default CategoryPage
