import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[pageId].paths'
import { getStaticProps } from './[pageId].props'
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
import { IPaginationState, ISeoState } from '@/stores/common'

export interface ITagPage {
  tag: ITag
  blogs: IBlog[]
  breadCrumb: IBreadCrumb
  pagination: IPaginationState
  globalMenu: IGlobalMenu[]
  seo: ISeoState
}

const TagPage: NextPage<ITagPage> = ({
  tag,
  blogs,
  breadCrumb,
  pagination,
  globalMenu,
  seo,
}) => {
  const { setBlogs, resetBlogs } = useBlogData()
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
  const { setTag, resetTag } = useTagData()

  useEffect(() => {
    setTag(tag)
    setBlogs(blogs)
    setBreadCrumb(breadCrumb)
    setPagination(pagination)
    setGlobalMenu(globalMenu)
    setSeo(seo)

    return () => {
      resetTag()
      resetBlogs()
      resetBreadCrumb()
      resetPagination()
      resetGlobalMenu()
      resetSeo()
    }
  }, [tag, blogs, breadCrumb, pagination, globalMenu, seo])

  return (
    <Layout>
      <TagDetail />
      <Pagination />
    </Layout>
  )
}

export default TagPage
export { getStaticPaths, getStaticProps }
