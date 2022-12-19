import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/monokai.css'
/* Client */
import { client } from '@/lib/client'
/* Components */
import BlogDetail from '@/components/assembles/BlogDetail'
/* Const */
import { API, PAGE } from '@/const/index'
/* Layouts */
import DefaultLayout from '@/components/layouts/DefaultLayout'
/* Types */
import { IBlog, IBlogsApiResponse, IBlogDetailApiResponse } from '@/types/index'

interface IBlogPage {
  contents: IBlog
}

const BlogPage: NextPage<IBlogPage> = ({ contents }) => {
  return (
    <DefaultLayout>
      <BlogDetail {...contents} />
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
  const paths = blog.contents.map(({ id }) => `${PAGE.BLOGS}/${id}`)

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
    endpoint: API.BLOGS.END_POINT,
    queries: { ids: id },
  })

  // HTMLをパース
  const $ = cheerio.load(contents[0].body, { _useHtmlParser2: true })

  // pre > code タグをパース
  $('pre code').each((_, element) => {
    const result = hljs.highlightAuto($(element).text())
    $(element).html(result.value)
    $(element).addClass('hljs')
  })

  return {
    props: {
      contents: {
        id: contents[0].id,
        title: contents[0].title,
        description: contents[0].description,
        body: $.html(),
        image: contents[0].image,
        createdAt: contents[0].createdAt,
        updatedAt: contents[0].updatedAt,
        publishedAt: contents[0].publishedAt,
        revisedAt: contents[0].revisedAt,
        categories: contents[0].categories,
      },
    },
  }
}

export default BlogPage
