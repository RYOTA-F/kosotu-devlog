import { useEffect } from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
/* Components */
import CategoryDetail from '@/components/organisms/CategoryDetail'
/* Const */
import { API, PAGE } from '@/const/index'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Lib */
import { client } from '@/libs/index'
/* Types */
import { IBreadCrumb } from '@/types/microCMS/blog'
import { ICategory, ICategoryApiResponse } from '@/types/microCMS/category'
/* Utils */
import { getBreadCrumbDataFromCategory } from '@/utils/index'

export interface ICategoryPage {
  category: ICategory
  breadCrumb: IBreadCrumb
}

const CategoryPage: NextPage<ICategoryPage> = ({ category, breadCrumb }) => {
  const { setBreadCrumb, resetBreadCrumb } = useCommonData()

  useEffect(() => {
    setBreadCrumb(breadCrumb)

    return () => {
      resetBreadCrumb()
    }
  }, [])

  return (
    <DefaultLayout>
      <CategoryDetail {...category} />
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

  // パンくず情報を取得
  const breadCrumb = getBreadCrumbDataFromCategory(contents[0])

  return {
    props: {
      category: contents[0],
      breadCrumb,
    },
  }
}

export default CategoryPage
