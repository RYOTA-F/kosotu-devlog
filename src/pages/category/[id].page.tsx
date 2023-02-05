import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[id].paths'
import { getStaticProps } from './[id].props'
/* Components */
import CategoryDetail from '@/components/organisms/CategoryDetail'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCategoryData from '@/hooks/useCategoryData'
import useCommonData from '@/hooks/useCommonData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Types */
import { IBreadCrumb } from '@/types/microCMS/blog'
import { ICategory } from '@/types/microCMS/category'
import { ISeoState } from '@/stores/common'

export interface ICategoryPage {
  category: ICategory
  breadCrumb: IBreadCrumb
  seo: ISeoState
}

const CategoryPage: NextPage<ICategoryPage> = ({
  category,
  breadCrumb,
  seo,
}) => {
  const {
    setBreadCrumb,
    resetBreadCrumb,
    setSeo,
    resetSeo,
    onCloseIsViewSidenav,
  } = useCommonData()
  const { setBlogs, resetBlogs } = useBlogData()
  const { setCategory, resetCategory } = useCategoryData()

  useEffect(() => {
    setBreadCrumb(breadCrumb)
    setBlogs(category.blogs)
    setCategory(category)
    setSeo(seo)
    onCloseIsViewSidenav()

    return () => {
      resetBreadCrumb()
      resetBlogs()
      resetCategory()
      resetSeo()
    }
  }, [category, breadCrumb, seo])

  return (
    <DefaultLayout>
      <CategoryDetail />
    </DefaultLayout>
  )
}

export default CategoryPage
export { getStaticPaths, getStaticProps }
