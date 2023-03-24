import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[id].paths'
import { getStaticProps } from './[id].props'
/* Layouts */
import Layout from '@/components/Layout'
/* Components */
import BlogCardList from '@/features/blogs/components/BlogCardList'
import Pagination from '@/components/Pagination'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCommonData from '@/hooks/useCommonData'
/* Types */
import { IBlog, IGlobalMenu } from '@/types/index'
import { IPaginationState } from '@/stores/common'

interface IPage {
  blogs: IBlog[]
  pagination: IPaginationState
  globalMenu: IGlobalMenu[]
}

const Page: NextPage<IPage> = ({ blogs, pagination, globalMenu }) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const { setGlobalMenu, resetGlobalMenu, setPagination, resetPagination } =
    useCommonData()

  useEffect(() => {
    setBlogs(blogs)
    setPagination(pagination)
    setGlobalMenu(globalMenu)

    return () => {
      resetBlogs()
      resetPagination()
      resetGlobalMenu()
    }
  }, [blogs, pagination, globalMenu])

  return (
    <Layout>
      <BlogCardList />
      <Pagination />
    </Layout>
  )
}

export default Page
export { getStaticPaths, getStaticProps }
