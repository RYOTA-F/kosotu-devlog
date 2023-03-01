import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[pageId].paths'
import { getStaticProps } from './[pageId].props'
/* Components */
import TagDetail from '@/components/organisms/TagDetail'
import Pagination from '@/components/organisms/Pagination'
/* Hooks */
import useBlogData from '@/src/hooks/useBlogData'
import useCommonData from '@/src/hooks/useCommonData'
import useTagData from '@/src/hooks/useTagData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
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
    <DefaultLayout>
      <TagDetail />
      <Pagination />
    </DefaultLayout>
  )
}

export default TagPage
export { getStaticPaths, getStaticProps }
