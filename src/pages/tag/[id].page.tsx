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
import { ITag, IBreadCrumb } from '@/types/index'
import { ISeoState } from '@/stores/common'

export interface ITagPage {
  tag: ITag
  breadCrumb: IBreadCrumb
  seo: ISeoState
}

const TagPage: NextPage<ITagPage> = ({ tag, breadCrumb, seo }) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const { setBreadCrumb, resetBreadCrumb, setSeo, resetSeo } = useCommonData()
  const { setTag, resetTag } = useTagData()

  useEffect(() => {
    setBlogs(tag.blogs)
    setBreadCrumb(breadCrumb)
    setTag(tag)
    setSeo(seo)

    return () => {
      resetBlogs()
      resetBreadCrumb()
      resetTag()
      resetSeo()
    }
  }, [tag, seo])

  return (
    <DefaultLayout>
      <TagDetail />
    </DefaultLayout>
  )
}

export default TagPage
export { getStaticPaths, getStaticProps }
