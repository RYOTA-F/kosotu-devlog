import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[pageId].paths'
import { getStaticProps } from './[pageId].props'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import CategoryDetail from '@/features/categories/CategoryDetail'
import Pagination from '@/components/organisms/Pagination'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCategoryData from '@/hooks/useCategoryData'
import useCommonData from '@/hooks/useCommonData'
/* Types */
import { IBlog, IBreadCrumb, ICategory, IGlobalMenu } from '@/types/index'
import { IPaginationState, ISeoState } from '@/stores/common'

interface IPage {
  category: ICategory
  blogs: IBlog[]
  breadCrumb: IBreadCrumb
  pagination: IPaginationState
  globalMenu: IGlobalMenu[]
  seo: ISeoState
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
    setSeo,
    resetSeo,
  } = useCommonData()

  useEffect(() => {
    setCategory(category)
    setBlogs(blogs)
    setBreadCrumb(breadCrumb)
    setPagination(pagination)
    setGlobalMenu(globalMenu)
    setSeo(seo)

    return () => {
      resetCategory()
      resetBlogs()
      resetBreadCrumb()
      resetPagination()
      resetGlobalMenu()
      resetSeo()
    }
  }, [category, blogs, breadCrumb, seo, globalMenu, pagination])

  return (
    <DefaultLayout>
      <CategoryDetail />
      <Pagination />
    </DefaultLayout>
  )
}

export default CategoryPage
export { getStaticPaths, getStaticProps }
