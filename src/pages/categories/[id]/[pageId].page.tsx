import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[pageId].paths'
import { getStaticProps } from './[pageId].props'
/* Components */
import Layout from '@/components/Layout'
import Pagination from '@/components/Pagination'
/* Features */
import CategoryDetail from '@/features/categories/CategoryDetail'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCategoryData from '@/hooks/useCategoryData'
import useCommonData from '@/hooks/useCommonData'
/* Types */
import { IBlog, IBreadCrumb, ICategory, IGlobalMenu } from '@/types/index'
import { IPaginationState } from '@/stores/common'
import { ISeo } from '@/components/Seo'

interface IPage {
  category: ICategory
  blogs: IBlog[]
  breadCrumb: IBreadCrumb
  pagination: IPaginationState
  globalMenu: IGlobalMenu[]
  seo: ISeo
}

const CategoryPage: NextPage<IPage> = ({
  category,
  blogs,
  breadCrumb,
  pagination,
  globalMenu,
  seo,
}) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const { setCategory, resetCategory } = useCategoryData()
  const {
    setGlobalMenu,
    resetGlobalMenu,
    setBreadCrumb,
    resetBreadCrumb,
    setPagination,
    resetPagination,
  } = useCommonData()

  useEffect(() => {
    setCategory(category)
    setBlogs(blogs)
    setBreadCrumb(breadCrumb)
    setPagination(pagination)
    setGlobalMenu(globalMenu)

    return () => {
      resetCategory()
      resetBlogs()
      resetBreadCrumb()
      resetPagination()
      resetGlobalMenu()
    }
  }, [category, blogs, breadCrumb, globalMenu, pagination])

  return (
    <Layout seo={seo}>
      <CategoryDetail />
      <Pagination />
    </Layout>
  )
}

export default CategoryPage
export { getStaticPaths, getStaticProps }
