import { useLayoutEffect } from 'react'
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

  useLayoutEffect(() => {
    setBlogs(blogs)
    setPagination(pagination)
    setGlobalMenu(globalMenu)

    return () => {
      resetBlogs()
      resetPagination()
      resetGlobalMenu()
    }
  }, [blogs, pagination, globalMenu])
  // useEffect(() => {
  //   setBlogs(blogs)
  //   setPagination(pagination)
  //   setGlobalMenu(globalMenu)

  //   return () => {
  //     resetBlogs()
  //     resetPagination()
  //     resetGlobalMenu()
  //   }
  // }, [blogs, pagination, globalMenu])

  return (
    <DefaultLayout>
      <BlogCardList />
      <Pagination />
    </DefaultLayout>
  )
}

export default Home
export { getStaticProps }
