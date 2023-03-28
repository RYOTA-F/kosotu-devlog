import { FC } from 'react'
import Image from 'next/image'
/* Const */
import { BLOG_DETAIL, IMAGE, ARIA_LABEL, TIME_ICON_SIZE } from './const'
/* Components */
import { TimeSvg } from '@/components/Elements/Svg'
import TableOfContents from '@/components/TableOfContents'
/* Features */
import CategoryList from '@/features/categories/CategoryList'
import TagList from '@/features/tags/TagList'
/* Hooks */
import useBlogData from '@/hooks/useBlogData'
import useCommonData from '@/hooks/useCommonData'
/* Libs */
import { formatDate } from '@/libs/dayjs'

const BlogDetailHeader: FC = () => {
  const { blog } = useBlogData()
  const { tableOfContents } = useCommonData()

  if (!blog) return null
  return (
    <section className="px-10 tb:px-0" aria-label={ARIA_LABEL}>
      <h1 className="text-gray-text-t3 text-[24px] font-bold sp:text-[5vw]">
        {blog.title}
      </h1>

      <div className="flex flex-wrap items-center mt-5">
        <div className="mr-5">
          <CategoryList categories={[blog.categories[0]]} />
        </div>
        <div className="mr-8">
          <TagList tags={blog.tags} />
        </div>
        <div className="flex items-center mb-2">
          <TimeSvg height={TIME_ICON_SIZE} width={TIME_ICON_SIZE} />
          <time
            dateTime={
              blog.oldPublishedAt
                ? formatDate(blog.oldPublishedAt)
                : formatDate(blog.publishedAt)
            }
            className="ml-1 text-gray-text-t1 text-[16px]"
          >
            {blog.oldPublishedAt
              ? formatDate(blog.oldPublishedAt)
              : formatDate(blog.publishedAt)}
          </time>
        </div>
      </div>

      <figure className="mt-5 rounded overflow-hidden shadow-lg">
        <Image
          src={blog.image.url}
          alt={IMAGE.ALT}
          width={IMAGE.WIDTH}
          height={IMAGE.HEIGHT}
          className="w-[100%] h-[auto]"
        />
      </figure>
      <div className="mt-8">
        <p>{BLOG_DETAIL.WELCOME_MESSAGE}</p>
        <p className="mt-3">{BLOG_DETAIL.THANKS_MESSAGE}</p>
        <p className="mt-3 whitespace-pre-wrap leading-[2.2]">
          {blog.description}
        </p>
      </div>

      {tableOfContents.length && (
        <div className="w-[90%] sp:w-full sp:ml-[5%] mt-8 ml-[10%] ">
          <TableOfContents tableOfContents={tableOfContents} />
        </div>
      )}
    </section>
  )
}

export default BlogDetailHeader
export * from './const'
