import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
/* Components */
import BlogDetail from '@/components/assembles/BlogDetail'
/* Const */
import { API, PAGE } from '@/const/index'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Lib */
import { client } from '@/lib/microCMS'
import { perseBlogBody } from '@/lib/cheerio'
/* Types */
import {
  IBlog,
  IBlogsApiResponse,
  IBlogDetailApiResponse,
  ITableOfContents,
  IBlogBreadCrumb,
} from '@/types/index'
/* Utils */
import { getBreadCrumbData } from '@/utils/blogBreadCrumb'

interface IBlogPage {
  contents: {
    blog: IBlog
    tableOfContents: ITableOfContents[]
    breadCrumb: IBlogBreadCrumb
  }
}

const BlogPage: NextPage<IBlogPage> = ({ contents }) => {
  const { blog, tableOfContents } = contents
  const { setBlogs, setTableOfContents } = useBlogData()

  useEffect(() => {
    setBlogs([blog])
    setTableOfContents(tableOfContents)
  }, [])

  return (
    <DefaultLayout breadCrumb={contents.breadCrumb}>
      <BlogDetail />
    </DefaultLayout>
  )
}

/**
 * 投稿ID毎にページパスを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOG.END_POINT,
  })
  const paths = blogs.contents.map(({ id }) => `${PAGE.BLOG}/${id}`)

  return {
    paths,
    fallback: false,
  }
}

/**
 * 投稿情報を取得し静的ページを生成
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
  const breadCrumb = getBreadCrumbData(contents[0])

  return {
    props: {
      contents: {
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
            : '',
          revisedAt: contents[0].revisedAt,
          categories: contents[0].categories,
          tags: contents[0].tags,
        },
        tableOfContents,
        breadCrumb,
      },
    },
  }
}

export default BlogPage
