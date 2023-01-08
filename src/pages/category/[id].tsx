import { useEffect } from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
/* Components */
import CategoryDetail from '@/components/organisms/CategoryDetail'
/* Const */
import { API, PAGE } from '@/const/index'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCategoryData from '@/hooks/useCategoryData'
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
  const { setBlogs, resetBlogs } = useBlogData()
  const { setCategory, resetCategory } = useCategoryData()

  useEffect(() => {
    setBreadCrumb(breadCrumb)
    setBlogs(category.blogs)
    setCategory(category)

    return () => {
      resetBreadCrumb()
      resetBlogs()
      resetCategory()
    }
  }, [category, breadCrumb])

  return (
    <DefaultLayout>
      <CategoryDetail />
    </DefaultLayout>
  )
}

/**
 * カテゴリID毎に静的ページを生成
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
 * 静的ページ用のカテゴリ情報を取得
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
