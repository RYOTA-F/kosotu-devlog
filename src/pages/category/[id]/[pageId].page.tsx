import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[pageId].paths'
import { getStaticProps } from './[pageId].props'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import BlogCardList from '@/components/organisms/BlogCardList'
import Pagination from '@/components/organisms/Pagination'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCommonData from '@/hooks/useCommonData'
/* Types */
import { IBlog, IBreadCrumb, IGlobalMenu } from '@/types/index'
import { IPaginationState } from '@/stores/common'

interface IPage {
  blogs: IBlog[]
  breadCrumb: IBreadCrumb
  pagination: IPaginationState
  globalMenu: IGlobalMenu[]
}

const Page: NextPage<IPage> = ({
  blogs,
  breadCrumb,
  pagination,
  globalMenu,
}) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const {
    setGlobalMenu,
    resetGlobalMenu,
    setBreadCrumb,
    resetBreadCrumb,
    setPagination,
    resetPagination,
  } = useCommonData()

  useEffect(() => {
    setBlogs(blogs)
    setBreadCrumb(breadCrumb)
    setPagination(pagination)
    setGlobalMenu(globalMenu)

    return () => {
      resetBlogs()
      resetBreadCrumb()
      resetPagination()
      resetGlobalMenu()
    }
  }, [blogs, breadCrumb])

  return (
    <DefaultLayout>
      <BlogCardList />
      <Pagination />
    </DefaultLayout>
  )
}

export default Page
export { getStaticPaths, getStaticProps }
