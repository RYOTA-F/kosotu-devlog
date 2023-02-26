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
import { IGlobalMenu } from '@/types/index'
import { IBlog, IBreadCrumb } from '@/types/microCMS/blog'
import { ICategory } from '@/types/microCMS/category'
import { ISeoState } from '@/stores/common'

export interface ICategoryPage {
  category: ICategory
  blogs: IBlog[]
  breadCrumb: IBreadCrumb
  seo: ISeoState
  globalMenu: IGlobalMenu[]
}

const CategoryPage: NextPage<ICategoryPage> = ({
  category,
  blogs,
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
    onCloseIsViewSidenav()

    return () => {
      resetGlobalMenu()
      resetBreadCrumb()
      resetBlogs()
      resetCategory()
      resetSeo()
    }
  }, [globalMenu, category, breadCrumb, seo])

  return (
    <DefaultLayout>
      <CategoryDetail />
    </DefaultLayout>
  )
}

export default CategoryPage
export { getStaticPaths, getStaticProps }
