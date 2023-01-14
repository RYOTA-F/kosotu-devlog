import { FC } from 'react'
import Link from 'next/link'
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
  return (
    <PaginationItemWrapper
      isCurrentPage={isCurrentPage}
      aria-label={ARIA_LABEL}
    >
      {isCurrentPage ? (
        <>{pageNumber}</>
      ) : (
        <Link href={pageNumber === 1 ? PAGE.ROOT : `${PAGE.PAGE}${pageNumber}`}>
          {pageNumber}
        </Link>
      )}
    </PaginationItemWrapper>
  )
}

export default PaginationItem
export * from './const'
