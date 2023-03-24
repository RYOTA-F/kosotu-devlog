import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticProps } from './index.props'
/* Components */
import Layout from '@/components/Layout'
import Pagination from '@/components/Pagination'
/* Features */
import BlogCardList from '@/features/blogs/BlogCardList'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCommonData from '@/hooks/useCommonData'
/* Types */
import { IBlog, IGlobalMenu } from '@/types/index'
import { IPaginationState } from '@/stores/common'

interface IHome {
  blogs: IBlog[]
  pagination: IPaginationState
  globalMenu: IGlobalMenu[]
}

const Home: NextPage<IHome> = ({ blogs, pagination, globalMenu }) => {
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

export default Home
export { getStaticProps }
