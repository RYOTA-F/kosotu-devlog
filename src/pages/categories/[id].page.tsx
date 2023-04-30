import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[id].paths'
import { getStaticProps } from './[id].props'
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
import { IGlobalMenu } from '@/types/index'
import { IBlog, IBreadCrumb } from '@/types/microCMS/blog'
import { ICategory } from '@/types/microCMS/category'
import { IPaginationState } from '@/stores/common'
import { ISeo } from '@/components/Seo'

export interface ICategoryPage {
  category: ICategory
  blogs: IBlog[]
  pagination: IPaginationState
  breadCrumb: IBreadCrumb
  seo: ISeo
  globalMenu: IGlobalMenu[]
}

const CategoryPage: NextPage<ICategoryPage> = ({
  category,
  blogs,
  pagination,
  breadCrumb,
  seo,
  globalMenu,
}) => {
  const {
    setGlobalMenu,
    resetGlobalMenu,
    setBreadCrumb,
    resetBreadCrumb,
    setPagination,
    resetPagination,
    onCloseIsViewSidenav,
  } = useCommonData()
  const { setBlogs, resetBlogs } = useBlogData()
  const { setCategory, resetCategory } = useCategoryData()

  useEffect(() => {
    setGlobalMenu(globalMenu)
    setBreadCrumb(breadCrumb)
    setBlogs(blogs)
    setCategory(category)
    setPagination(pagination)
    onCloseIsViewSidenav()

    return () => {
      resetGlobalMenu()
      resetBreadCrumb()
      resetBlogs()
      resetCategory()
      resetPagination()
    }
  }, [globalMenu, category, breadCrumb])

  return (
    <Layout seo={seo}>
      <CategoryDetail />
      <Pagination />
    </Layout>
  )
}

export default CategoryPage
export { getStaticPaths, getStaticProps }
