import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
/* Const */
import { PAGE } from '@/const/index'
import { ARIA_LABEL } from './const'

export interface IPaginationItem {
  pageNumber: number
  isCurrentPage: boolean
}

const PaginationItem: FC<IPaginationItem> = ({ pageNumber, isCurrentPage }) => {
  const router = useRouter()

  const TOP_PAGE_NUM = 1 as const
  const TOP_PATH = '[id]' as const
  const PAGES_PATH = `${TOP_PATH}/[pageId]` as const

  const linkUrl = () => {
    switch (router.pathname) {
      case `${PAGE.CATEGORY}${TOP_PATH}`:
      case `${PAGE.CATEGORY}${PAGES_PATH}`:
        return pageNumber === TOP_PAGE_NUM
          ? `${PAGE.CATEGORY}${String(router.query.id)}`
          : `${PAGE.CATEGORY}${String(router.query.id)}/${pageNumber}`
      case `${PAGE.TAG}${TOP_PATH}`:
      case `${PAGE.TAG}${PAGES_PATH}`:
        return pageNumber === TOP_PAGE_NUM
          ? `${PAGE.TAG}${String(router.query.id)}`
          : `${PAGE.TAG}${String(router.query.id)}/${pageNumber}`
      default:
        return pageNumber === TOP_PAGE_NUM
          ? PAGE.ROOT
          : `${PAGE.PAGE}${pageNumber}`
    }
  }

  return (
    <div
      className="h-9 w-9 leading-9 text-center text-gray-text-t1 transition-all bg-gray-bg-t1 bg-gray-pagination hover:bg-blue-main hover:text-white rounded"
      style={isCurrentPage ? { background: '#709dd8' } : {}}
      aria-label={ARIA_LABEL}
    >
      {isCurrentPage ? (
        <span className="block text-white">{pageNumber}</span>
      ) : (
        <Link href={linkUrl()} className="block text-white cursor-pointer">
          {pageNumber}
        </Link>
      )}
    </div>
  )
}

export default PaginationItem
export * from './const'
