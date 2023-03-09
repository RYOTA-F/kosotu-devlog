import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[id].paths'
import { getStaticProps } from './[id].props'
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
import { ISeoState, IPaginationState } from '@/stores/common'

export interface ITagPage {
  tag: ITag
  blogs: IBlog[]
  pagination: IPaginationState
  breadCrumb: IBreadCrumb
  seo: ISeoState
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
    setSeo,
    resetSeo,
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
    setSeo(seo)
    setGlobalMenu(globalMenu)
    onCloseIsViewSidenav()

    return () => {
      resetBlogs()
      resetBreadCrumb()
      resetTag()
      resetPagination()
      resetSeo()
      resetGlobalMenu
    }
  }, [tag, pagination, seo, globalMenu])

  return (
    <DefaultLayout>
      <TagDetail />
      <Pagination />
    </DefaultLayout>
  )
}

export default TagPage
export { getStaticPaths, getStaticProps }
