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
import { getCategories } from '@/service/categories'
/* types */
import { BlogItemType } from '@/types/blog'
import { CategoryType } from '@/types/category'

/**
 * props
 */
type TopPageProps = {
  blogList: BlogItemType[]
  totalCount: number
  categories: CategoryType[]
}

const TopPage: NextPage<TopPageProps> = (props: TopPageProps) => {
  const { blogList, categories } = props

  return (
    <TopLayout blogList={blogList} categories={categories} />
  )
}

/**
 * getStaticPsops
 * @returns
 */
export const getStaticProps: GetStaticProps= async () => {
  // ブログ一覧データ取得
  const blogData = await getBlogs(0)
  // カテゴリー一覧データ取得
  const categoryData = await getCategories()

  const props = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    categories: categoryData
  }

  return { props }
}

export default TopPage