import { FC } from 'react'
/* Components */
import PaginationItem from '@/components/Elements/PaginationItem'
/* Const */
import { ARIA_LABEL } from './const'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'

const Pagination: FC = () => {
  const { currentPage, totalPage } = useCommonData()

  const pages = [...new Array(totalPage)].map((_, i) => i)

  return (
    <section className="flex justify-center mt-10" aria-label={ARIA_LABEL}>
      {pages.map((v) => (
        <div key={v} className="m-1">
          <PaginationItem
            pageNumber={v + 1}
            isCurrentPage={currentPage === v + 1}
          />
        </div>
      ))}
    </section>
  )
}

export default Pagination
export * from './const'
