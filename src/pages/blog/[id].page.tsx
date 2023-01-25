import { useEffect } from 'react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
/* Components */
import BlogDetail from '@/components/organisms/BlogDetail'
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Const */
import { API, PAGE } from '@/const/index'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCommonData from '@/hooks/useCommonData'
/* Lib */
import { client, perseBlogBody } from '@/libs/index'
/* Types */
import {
  IBlog,
  IBlogsApiResponse,
  IBlogDetailApiResponse,
  ITableOfContents,
  IBreadCrumb,
} from '@/types/index'
import { ISeoState } from '@/stores/common'
/* Utils */
import { getBreadCrumbDataFromBlog, getSeoFromBlog } from '@/utils/index'

interface IBlogPage {
  blog: IBlog
  tableOfContents: ITableOfContents[]
  breadCrumb: IBreadCrumb
  seo: ISeoState
}

const BlogPage: NextPage<IBlogPage> = ({
  blog,
  tableOfContents,
  breadCrumb,
  seo,
}) => {
  const { setBlogs, resetBlogs } = useBlogData()
  const {
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

    return () => {
      resetBlogs()
      resetTableOfContents()
      resetBreadCrumb()
      resetSeo()
    }
  }, [blog, tableOfContents, breadCrumb, seo])

  // Twitter Embed Scriptをロード
  useEffect(() => {
    const url = 'https://platform.twitter.com/widgets.js'
    const script = document.createElement('script')

    script.src = url
    script.setAttribute('async', 'async')

    document.body.appendChild(script)
  }, [])

  return (
    <DefaultLayout>
      <BlogDetail />
    </DefaultLayout>
  )
}

/**
 * 投稿ID毎に静的ページを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
    // デフォルトで limitが10件 になるのを解除
    queries: { limit: 9999 },
  })
  const paths = blogs.contents.map(({ id }) => `${PAGE.BLOG}${id}`)

  return {
    paths,
    fallback: false,
  }
}

/**
 * 静的ページ用の投稿情報を取得
 */
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true }

  // 投稿IDを取得
  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  // 投稿IDを指定しデータを取得
  const { contents } = await client.get<IBlogDetailApiResponse>({
    endpoint: API.BLOG.END_POINT,
    queries: { ids: id },
  })

  // 投稿本文をパース
  const { body, tableOfContents } = await perseBlogBody(contents[0].body)
  // パンくず情報を取得
  const breadCrumb = getBreadCrumbDataFromBlog(contents[0])
  // SEO情報を取得
  const seo = getSeoFromBlog(contents[0])

  return {
    props: {
      blog: {
        id: contents[0].id,
        title: contents[0].title,
        description: contents[0].description,
        body,
        image: contents[0].image,
        createdAt: contents[0].createdAt,
        updatedAt: contents[0].updatedAt,
        publishedAt: contents[0].publishedAt,
        oldPublishedAt: contents[0].oldPublishedAt
          ? contents[0].oldPublishedAt
          : null,
        revisedAt: contents[0].revisedAt,
        categories: contents[0].categories,
        tags: contents[0].tags,
      },
      tableOfContents,
      breadCrumb,
      seo,
    },
  }
}

export default BlogPage
