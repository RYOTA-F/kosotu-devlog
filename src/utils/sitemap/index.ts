/* Const */
import { PAGE } from '@/const/index'
/* Types */
import {
  IBlog,
  ICategory,
  ISitemap,
  IProcessingChildrenCategories,
} from '@/types/index'

/**
 * サイトマップ情報を取得
 */
export const createSitemapData = (blogs: IBlog[], categories: ICategory[]) => {
  // 必要な投稿情報に加工
  const afterBlogs = processingBlogsData(blogs)
  // 親カテゴリを分離
  const parentCategories = processingParentCategoriesData(categories)
  // 子カテゴリを分離
  const childrenCategories = processingChildrenCategoriesData(categories)

  // 子カテゴリに紐づく投稿一覧を格納
  childrenCategories.forEach((v) => {
    v.blogs = afterBlogs.filter((blog) => blog.category === v.id)
  })

  // 親カテゴリに紐づく子カテゴリ一覧を取得
  parentCategories.forEach((v) => {
    v.children = childrenCategories.filter(
      (category) => category.parent === v.id
    )
  })

  return parentCategories
}

/**
 * 必要な投稿情報に加工
 */
const processingBlogsData = (blogs: IBlog[]) => {
  return blogs.map((v) => ({
    title: v.title,
    url: `${PAGE.BLOG}${v.id}`,
    category: v.categories[0].id,
  }))
}

/**
 * 必要な子カテゴリ情報に加工
 */
const processingChildrenCategoriesData = (categories: ICategory[]) => {
  const filterCategories = categories.filter((v) => !v.relation.isParent)

  return filterCategories.map(
    (v) =>
      ({
        id: v.id,
        name: v.name,
        url: `${PAGE.CATEGORY}${v.id}`,
        parent: v.relation.parent[0].id,
        blogs: [],
      } as IProcessingChildrenCategories)
  )
}

/**
 * 必要な親カテゴリ情報に加工
 */
const processingParentCategoriesData = (categories: ICategory[]) => {
  const filterCategories = categories.filter((v) => v.relation.isParent)

  return filterCategories.map(
    (v) =>
      ({
        id: v.id,
        name: v.name,
        url: `${PAGE.CATEGORY}${v.id}`,
        children: [],
      } as ISitemap)
  )
}
