import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticProps } from './index.props'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Components */
import BlogCardList from '@/components/organisms/BlogCardList'
import Pagination from '@/components/organisms/Pagination'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCommonData from '@/hooks/useCommonData'
/* Types */
import { IBlog } from '@/types/index'
import { IPaginationState } from '@/stores/common'

interface IHome {
  blogs: IBlog[]
  pagination: IPaginationState
}

const Home: NextPage<IHome> = ({ blogs, pagination }) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const { setPagination, resetPagination } = useCommonData()

  useEffect(() => {
    setBlogs(blogs)
    setPagination(pagination)

    return () => {
      resetBlogs()
      resetPagination()
    }
  }, [blogs, pagination])

  return (
    <DefaultLayout>
      <BlogCardList />
      <Pagination />
    </DefaultLayout>
  )
}

export default Home
export { getStaticProps }
