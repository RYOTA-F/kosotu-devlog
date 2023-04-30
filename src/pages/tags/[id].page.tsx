import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[id].paths'
import { getStaticProps } from './[id].props'
/* Components */
import Layout from '@/components/Layout'
import Pagination from '@/components/Pagination'
/* Features */
import TagDetail from '@/features/tags/TagDetail'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCommonData from '@/hooks/useCommonData'
import useTagData from '@/hooks/useTagData'
/* Types */
import { IBlog, ITag, IBreadCrumb, IGlobalMenu } from '@/types/index'
import { IPaginationState } from '@/stores/common'
import { ISeo } from '@/components/Seo'

export interface ITagPage {
  tag: ITag
  blogs: IBlog[]
  pagination: IPaginationState
  breadCrumb: IBreadCrumb
  seo: ISeo
  globalMenu: IGlobalMenu[]
}

const TagPage: NextPage<ITagPage> = ({
  tag,
  blogs,
  pagination,
  breadCrumb,
  seo,
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
    onCloseIsViewSidenav,
  } = useCommonData()
  const { setTag, resetTag } = useTagData()

  useEffect(() => {
    setBlogs(blogs)
    setBreadCrumb(breadCrumb)
    setTag(tag)
    setPagination(pagination)
    setGlobalMenu(globalMenu)
    onCloseIsViewSidenav()

    return () => {
      resetBlogs()
      resetBreadCrumb()
      resetTag()
      resetPagination()
      resetGlobalMenu
    }
  }, [tag, pagination, globalMenu])

  return (
    <Layout seo={seo}>
      <TagDetail />
      <Pagination />
    </Layout>
  )
}

export default TagPage
export { getStaticPaths, getStaticProps }
