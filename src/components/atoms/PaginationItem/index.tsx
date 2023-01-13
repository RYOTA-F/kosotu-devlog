import { FC } from 'react'
/* Const */
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
      {pageNumber}
    </PaginationItemWrapper>
  )
}

export default PaginationItem
export * from './const'
