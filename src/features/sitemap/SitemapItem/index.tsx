import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { ARIA_LABEL } from './const'
/* Types */
import { TSitemapType } from '@/types/index'

export interface ISitemapItem {
  type: TSitemapType
  label: string
  url: string
}

const SitemapItem: FC<ISitemapItem> = ({ type, label, url }) => {
  return (
    <>
      {type === 'top' && (
        <div className="relative mb-8 hover:opacity-60" aria-label={ARIA_LABEL}>
          <Link
            href={url}
            className="block py-2 px-8 font-bold text-gray-text-t3 text-[18px]"
          >
            {label}
          </Link>
          <div className="absolute content-[''] w-[300px] -bottom-[10px] left-0 h-[2px] bg-gradient-to-r from-blue-main" />
        </div>
      )}

      {type === 'parent' && (
        <div
          className="inline-block border-l-8 border-blue-main bg-blue-sub hover:opacity-60"
          aria-label={ARIA_LABEL}
        >
          <Link
            href={url}
            className="block py-2 pl-4 pr-10 font-bold text-white text-[16px]"
          >
            {label}
          </Link>
        </div>
      )}

      {type === 'children' && (
        <div
          className="inline-block border-l-8 border-blue-main bg-gray-list hover:opacity-60"
          aria-label={ARIA_LABEL}
        >
          <Link
            href={url}
            className="block py-2 pl-4 pr-10 font-bold text-gray-text-t3 text-[16px]"
          >
            {label}
          </Link>
        </div>
      )}

      {type === 'blog' && (
        <div
          className="inline-block border-b-2 border-blue-sub hover:opacity-60"
          aria-label={ARIA_LABEL}
        >
          <Link
            href={url}
            className="block py-2 pl-4 pr-10 font-bold text-gray-text-t3 text-[14px]"
          >
            {label}
          </Link>
        </div>
      )}
    </>
  )
}

export default SitemapItem
export * from './const'
