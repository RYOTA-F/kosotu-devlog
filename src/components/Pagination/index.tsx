import { FC } from 'react'
/* Components */
import PaginationItem from '@/components/Elements/PaginationItem'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Styles */
import { PaginationWrapper, PaginationItemWrapper } from './index.styles'

const Pagination: FC = () => {
  const { currentPage, totalPage } = useCommonData()

  const pages = [...new Array(totalPage)].map((_, i) => i)

  return (
    <PaginationWrapper aria-label={ARIA_LABEL}>
      {pages.map((v) => (
        <PaginationItemWrapper key={v}>
          <PaginationItem
            pageNumber={v + 1}
            isCurrentPage={currentPage === v + 1}
          />
        </PaginationItemWrapper>
      ))}
    </PaginationWrapper>
  )
}

export default Pagination
export * from './const'
