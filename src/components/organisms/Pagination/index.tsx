import { FC } from 'react'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'

const Pagination: FC = () => {
  const { pageNumber } = useCommonData()
  return <div>{pageNumber}</div>
}

export default Pagination
