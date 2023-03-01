import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
/* Const */
import { PAGE } from '@/const/index'
import { ARIA_LABEL } from './const'
/* Styles */
import { PaginationItemWrapper } from './index.styles'

export interface IPaginationItem {
  pageNumber: number
  isCurrentPage: boolean
}

const PaginationItem: FC<IPaginationItem> = ({ pageNumber, isCurrentPage }) => {
  const router = useRouter()

  const linkUrl = () => {
    switch (router.pathname) {
      case '/category/[id]':
      case '/category/[id]/[pageId]':
        return pageNumber === 1
          ? `/category/${String(router.query.id)}`
          : `/category/${String(router.query.id)}/${pageNumber}`
      case '/tag/[id]':
      case '/tag/[id]/[pageId]':
        return pageNumber === 1
          ? `/tag/${String(router.query.id)}`
          : `/tag/${String(router.query.id)}/${pageNumber}`
      default:
        return pageNumber === 1 ? PAGE.ROOT : `${PAGE.PAGE}${pageNumber}`
    }
  }

  return (
    <PaginationItemWrapper
      isCurrentPage={isCurrentPage}
      aria-label={ARIA_LABEL}
    >
      {isCurrentPage ? (
        <>{pageNumber}</>
      ) : (
        <Link href={linkUrl()}>{pageNumber}</Link>
      )}
    </PaginationItemWrapper>
  )
}

export default PaginationItem
export * from './const'
