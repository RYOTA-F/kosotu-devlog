import { FC } from 'react'
/* Features */
import BlogCardList from '@/features/blogs/BlogCardList'
import CategoryDetailHeader from '@/features/categories/CategoryDetailHeader'
/* Const */
import { ARIA_LABEL } from './const'

const CategoryDetail: FC = () => {
  return (
    <section aria-label={ARIA_LABEL}>
      <CategoryDetailHeader />
      <div className="mt-10">
        <BlogCardList />
      </div>
    </section>
  )
}

export default CategoryDetail
export * from './const'
