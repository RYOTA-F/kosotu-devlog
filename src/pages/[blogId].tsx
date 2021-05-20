/**
* Pages/BlogArticlePage
* @package Component
*/
import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
/* components */
import BlogArticleLayout from '@/components/templates/BlogArticleLayout'
/* constants */
import { BLOG_SHOW_COUNT } from '@/constants/config'
/* logic */
import { createPageArray } from '@/logic/CommonLogic'
/* types */
/* styles */
/* services */
import { getBlogs, getBlogById } from '@/service/blogs'
import { BlogItemType } from '@/types/blog'

/**
 * props
 */
type BlogArticlePageProps = {
  blogItem: BlogItemType
}

/**
 * @param props TProps
 * @returns
 */
const BlogArticlePage: NextPage<BlogArticlePageProps> = (props: BlogArticlePageProps) => {
  const { blogItem } = props
  
  return (
    <BlogArticleLayout blogItem={blogItem}/>
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
    fallback: true, // プレビューのためtrueに設定
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

    const props = {
      blogItem: blogDetailData
    }
  
    return { props }
  } catch (error) {
    return { notFound: true }
  }
  
}

export default BlogArticlePage