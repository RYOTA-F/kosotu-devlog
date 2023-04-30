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
import { ISeo } from '@/components/Seo'

interface IBlogPage {
  blog: IBlog
  tableOfContents: ITableOfContents[]
  breadCrumb: IBreadCrumb
  seo: ISeo
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
  } = useCommonData()

  useEffect(() => {
    setBlogs([blog])
    setTableOfContents(tableOfContents)
    setBreadCrumb(breadCrumb)
    setGlobalMenu(globalMenu)

    return () => {
      resetBlogs()
      resetTableOfContents()
      resetBreadCrumb()
      resetGlobalMenu
    }
  }, [blog, tableOfContents, breadCrumb, globalMenu])

  // Twitter Embed Scriptをロード
  useEffect(() => {
    const url = 'https://platform.twitter.com/widgets.js'
    const script = document.createElement('script')

    script.src = url
    script.setAttribute('async', 'async')

    document.body.appendChild(script)
  }, [])

  return (
    <Layout seo={seo}>
      <BlogDetail />
    </Layout>
  )
}

export default BlogPage
export { getStaticPaths, getStaticProps }
