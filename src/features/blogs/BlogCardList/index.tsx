import { FC } from 'react'
/* Features */
import BlogCard from '@/features/blogs/BlogCard'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'

const BlogCardList: FC = () => {
  const { blogs } = useBlogData()

  return (
    <article aria-label={ARIA_LABEL}>
      <ul className="w-[100%] -mt-5 tb:mt-0 flex flex-wrap sp:block">
        {blogs.map((v) => (
          <li
            key={v.title}
            className="w-[50%] p-[2%] tb:p-[1%] sp:w-[95%] sp:p-0 sp:mx-auto sp:[&:not(:first-of-type)]:mt-4"
          >
            <BlogCard title={v.title} id={v.id} image={v.image} />
          </li>
        ))}
      </ul>
    </article>
  )
}

export default BlogCardList
export * from './const'
