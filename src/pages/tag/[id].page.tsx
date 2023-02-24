import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[id].paths'
import { getStaticProps } from './[id].props'
/* Components */
import TagDetail from '@/components/organisms/TagDetail'
/* Hooks */
import useBlogData from '@/src/hooks/useBlogData'
import useCommonData from '@/src/hooks/useCommonData'
import useTagData from '@/src/hooks/useTagData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Types */
import { ITag, IBreadCrumb, IGlobalMenu } from '@/types/index'
import { ISeoState } from '@/stores/common'

export interface ITagPage {
  tag: ITag
  breadCrumb: IBreadCrumb
  seo: ISeoState
  globalMenu: IGlobalMenu[]
}

const TagPage: NextPage<ITagPage> = ({ tag, breadCrumb, seo, globalMenu }) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const {
    setGlobalMenu,
    resetGlobalMenu,
    setBreadCrumb,
    resetBreadCrumb,
    setSeo,
    resetSeo,
  } = useCommonData()
  const { setTag, resetTag } = useTagData()

  useEffect(() => {
    setBlogs(tag.blogs)
    setBreadCrumb(breadCrumb)
    setTag(tag)
    setSeo(seo)
    setGlobalMenu(globalMenu)

    return () => {
      resetBlogs()
      resetBreadCrumb()
      resetTag()
      resetSeo()
      resetGlobalMenu
    }
  }, [tag, seo, globalMenu])

  return (
    <DefaultLayout>
      <TagDetail />
    </DefaultLayout>
  )
}

export default TagPage
export { getStaticPaths, getStaticProps }
