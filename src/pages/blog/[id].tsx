import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
/* Client */
import { client } from '@/lib/client'
/* Components */
import BlogDetail from '@/components/assembles/BlogDetail'
/* Const */
import { API, PAGE } from '@/const/index'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Types */
import { IBlogsApiResponse, IBlogDetailApiResponse } from '@/types/index'

const BlogPage: NextPage<IBlogDetailApiResponse> = ({ contents }) => {
  return (
    <DefaultLayout>
      <BlogDetail {...contents[0]} />
    </DefaultLayout>
  )
}

/**
 * 投稿ID毎にページパスを生成
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const blog = await client.get<IBlogsApiResponse>({
    endpoint: API.BLOGS.END_POINT,
  })
  const paths = blog.contents.map(({ id }) => `${PAGE.BLOG}/${id}`)

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

  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? ''

  const { contents } = await client.get<IBlogDetailApiResponse>({
    endpoint: API.BLOGS.END_POINT,
    queries: { ids: id },
  })

  return {
    props: {
      contents,
    },
  }
}

export default BlogPage
