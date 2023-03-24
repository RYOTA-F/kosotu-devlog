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
import { ISeoState, IPaginationState } from '@/stores/common'

export interface ICategoryPage {
  category: ICategory
  blogs: IBlog[]
  pagination: IPaginationState
  breadCrumb: IBreadCrumb
  seo: ISeoState
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
    setSeo,
    resetSeo,
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
    setSeo(seo)
    setPagination(pagination)
    onCloseIsViewSidenav()

    return () => {
      resetGlobalMenu()
      resetBreadCrumb()
      resetBlogs()
      resetCategory()
      resetSeo()
      resetPagination()
    }
  }, [globalMenu, category, breadCrumb, seo])

  return (
    <Layout>
      <CategoryDetail />
      <Pagination />
    </Layout>
  )
}

export default CategoryPage
export { getStaticPaths, getStaticProps }
