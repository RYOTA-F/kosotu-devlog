import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
/* Const */
import { PAGE } from '@/const/index'
import { ARIA_LABEL } from './const'
/* Types */
import { IBlog } from '@/types/index'

export type IBlogCard = Pick<IBlog, 'title' | 'image'> & {
  id: string
}

const BlogCard: FC<IBlogCard> = ({ title, id, image }) => {
  return (
    <div className="hover:opacity-70" aria-label={ARIA_LABEL}>
      <Link href={`${PAGE.ARTICLES}${id}`}>
        <div className="rounded-md overflow-hidden shadow-lg">
          <Image
            src={image.url}
            alt={title}
            width={image.width}
            height={image.height}
            className="duration-300 hover:scale-105"
          />
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
export * from './const'
