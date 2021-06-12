/**
* Pages/BlogArticlePage
* @package Component
*/
import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
/* components */
import BlogArticleLayout from '@/components/templates/BlogArticleLayout'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
/* logic */
import { createPageArray } from '@/logic/CommonLogic'
/* services */
import { getBlogs, getBlogById } from '@/service/blogs'
import { getCategories } from '@/service/categories'
/* types */
import { BlogItemType, TableOfContentType } from '@/types/blog'
import { CategoryType } from '@/types/category'

/**
 * props
 */
type BlogArticlePageProps = {
  blogItem: BlogItemType
  highlightedBody: string
  tableOfContents: TableOfContentType[]
  categories: CategoryType[]
}

/**
 * @param props TProps
 * @returns
 */
const BlogArticlePage: NextPage<BlogArticlePageProps> = (props: BlogArticlePageProps) => {
  const { blogItem, highlightedBody, tableOfContents, categories } = props
  
  return (
    <>
      {/* {!blogItem ? (
        <div>ページが存在しません</div>
      ) : (   */}
        <BlogArticleLayout blogItem={blogItem} highlightedBody={highlightedBody} tableOfContents={tableOfContents} categories={categories} />
      {/* )} */}
    </>
  )
}

/**
 * getStaticPaths
 * @returns 
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = []
  const { totalCount } = await getBlogs(0)

  // ページ番号の配列を作成
  const pageCountArray = createPageArray(totalCount)

  for await (const pageNum of pageCountArray) {
    const offset = (pageNum - 1) * BLOG_SHOW_COUNT
    const blogData = await getBlogs(offset)
    blogData.blogList.forEach((blog) => {
      paths.push(`/${blog.id}`)
    })
  }

  return {
    paths,
    fallback: true,
  }
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  let blogId = ''

  if (params?.blogId && typeof params.blogId === 'string') {
    blogId = params.blogId
  }

  try {
    const blogDetailData = await getBlogById(blogId)
    const categoryData = await getCategories()

    // シンタックスハイライトの適用
    const $ = cheerio.load(blogDetailData.body)
    $('pre code').each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text())
      $(elm).html(result.value)
      $(elm).addClass('hljs')
    })

    // 目次作成
    const headings = $('h1, h2, h3').toArray()
    const tableOfContents: TableOfContentType[] = headings.map((data: cheerio.Element) => {
      return {
        // @ts-ignore
        text: String(data.children[0].data),
        //@ts-ignore
        id: data.attribs.id,
        //@ts-ignore
        name: data.name,
      }
    })

    const props = {
      blogItem: blogDetailData,
      highlightedBody: $.html(),
      tableOfContents: tableOfContents,
      categories: categoryData
    }
  
    return { props }
  } catch (error) {
    return { notFound: true }
  }
}

export default BlogArticlePage