/**
* Pages/BlogArticlePage
* @package Component
*/
import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
/* components */
import BlogArticleLayout from '@/components/templates/BlogArticleLayout'
/* constants */
/* types */
/* styles */
/* services */
import { getBlogById } from '@/service/blogs'
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

  return {
    paths,
    fallback: true
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