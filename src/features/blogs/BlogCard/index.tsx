import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
/* Const */
import { PAGE } from '@/const/index'
/* Components */
import { TimeSvg } from '@/components/Elements/Svg'
/* Const */
import { ARIA_LABEL } from './const'
/* Libs */
import { formatDate } from '@/libs/dayjs'
/* Types */
import { IBlogCard } from '@/types/index'

const TIME_ICON_SIZE = 12 as const
const IMAGE_ALT = 'Thumbnail'

const BlogCard: FC<IBlogCard> = ({ title, id, image, publishedAt }) => {
  return (
    <div className="hover:opacity-70" aria-label={ARIA_LABEL.BLOG_CARD}>
      <Link href={`${PAGE.ARTICLES}${id}`}>
        <div className="rounded-md overflow-hidden shadow-lg">
          <Image
            src={image.url}
            alt={IMAGE_ALT}
            width={image.width}
            height={image.height}
            className="duration-300 hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-base font-bold text-gray-text-t1">{title}</h2>
          <div className="mt-2 flex items-center">
            <TimeSvg height={TIME_ICON_SIZE} width={TIME_ICON_SIZE} />
            <time
              dateTime={formatDate(publishedAt)}
              className="ml-1 text-sm text-gray-text-t1"
            >
              {formatDate(publishedAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
export * from './const'
