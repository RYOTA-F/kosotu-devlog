import { useEffect } from 'react'
import type { NextPage } from 'next'
import { getStaticPaths } from './[id].paths'
import { getStaticProps } from './[id].props'
/* Components */
import Layout from '@/components/Layout'
/* Features */
import BlogDetail from '@/features/blogs/BlogDetail'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCommonData from '@/hooks/useCommonData'
/* Types */
import {
  IBlog,
  ITableOfContents,
  IBreadCrumb,
  IGlobalMenu,
} from '@/types/index'
import { ISeoState } from '@/stores/common'

interface IBlogPage {
  blog: IBlog
  tableOfContents: ITableOfContents[]
  breadCrumb: IBreadCrumb
  seo: ISeoState
  globalMenu: IGlobalMenu[]
}

const BlogPage: NextPage<IBlogPage> = ({
  blog,
  tableOfContents,
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
    setTableOfContents,
    resetTableOfContents,
    setSeo,
    resetSeo,
  } = useCommonData()

  useEffect(() => {
    setBlogs([blog])
    setTableOfContents(tableOfContents)
    setBreadCrumb(breadCrumb)
    setSeo(seo)
    setGlobalMenu(globalMenu)

    return () => {
      resetBlogs()
      resetTableOfContents()
      resetBreadCrumb()
      resetSeo()
      resetGlobalMenu
    }
  }, [blog, tableOfContents, breadCrumb, seo, globalMenu])

  // Twitter Embed Scriptをロード
  useEffect(() => {
    const url = 'https://platform.twitter.com/widgets.js'
    const script = document.createElement('script')

    script.src = url
    script.setAttribute('async', 'async')

    document.body.appendChild(script)
  }, [])

  return (
    <Layout>
      <BlogDetail />
    </Layout>
  )
}

export default BlogPage
export { getStaticPaths, getStaticProps }
