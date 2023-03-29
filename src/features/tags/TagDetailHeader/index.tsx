import { FC } from 'react'
/* Components */
import { H1 } from '@/components/Elements/Heading'
/* Const */
import { TAG_DETAIL_HEADER, ARIA_LABEL } from './const'
/* Hooks */
import useTagData from '@/hooks/useTagData'

const TagDetailHeader: FC = () => {
  const { tag } = useTagData()

  return (
    <div aria-label={ARIA_LABEL.TAG_DETAIL_HEADER}>
      <H1>
        {tag.name}
        <span className="ml-5 text-gray-text-t1 text-base font-bold">
          {TAG_DETAIL_HEADER.TITLE_LABEL.BEFORE}
          {TAG_DETAIL_HEADER.TITLE_LABEL.TEXT}
          {TAG_DETAIL_HEADER.TITLE_LABEL.AFTER}
        </span>
      </H1>
    </div>
  )
}

export default TagDetailHeader
export * from './const'
