import { FC } from 'react'
/* Features */
import BlogCard from '@/features/blogs/BlogCard'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
// import useMediaQuery from '@/hooks/useMediaQuery'

const BlogCardList: FC = () => {
  const { blogs } = useBlogData()
  // const { isSP } = useMediaQuery()

  return (
    <article aria-label={ARIA_LABEL.BLOG_CARD_LIST}>
      <ul className="mt-[-8px] flex flex-wrap">
        {blogs.map((v) => (
          <li key={v.title} className="w-[48%] p-[1%]">
            <BlogCard
              title={v.title}
              id={v.id}
              image={v.image}
              publishedAt={v.oldPublishedAt ? v.oldPublishedAt : v.publishedAt}
            />
          </li>
        ))}
      </ul>
    </article>
  )
}

export default BlogCardList
export * from './const'
