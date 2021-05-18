/**
 * Topページ
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
/* components */
import TopLayout from '@/components/templates/TopLayout'
/* service */
import { getBlogs } from '@/service/blogs'
/* types */
import { BlogItemType } from '@/types/blog'

/**
 * props
 */
type TopPageProps = {
  blogList: BlogItemType[]
  totalCount: number
}

const TopPage: NextPage<TopPageProps> = (props: TopPageProps) => {
  const { blogList, totalCount } = props

  console.log(blogList)
  console.log(totalCount)

  return (
    <TopLayout />
  )
}

/**
 * getStaticPsops
 * @returns
 */
export const getStaticProps: GetStaticProps= async () => {
  // ブログ一覧データ取得
  const blogData = await getBlogs(0)

  const props = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
  }

  return { props }
}

export default TopPage