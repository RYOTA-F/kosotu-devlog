import { FC } from 'react'
/* Components */
import { H1 } from '@/components/atoms/Heading'
/* Const */
import { TAG_DETAIL_HEADER, ARIA_LABEL } from './const'
/* Styles */
import { HeaderWrapper, HeaderLabel } from './index.styles'
/* Types */
import { ITag } from '@/types/index'

export type TTagDetailHeader = Pick<ITag, 'name'>

const TagDetailHeader: FC<TTagDetailHeader> = ({ name }) => {
  return (
    <HeaderWrapper aria-label={ARIA_LABEL.TAG_DETAIL_HEADER}>
      <H1>
        {name}
        <HeaderLabel>{TAG_DETAIL_HEADER.TITLE_LABEL}</HeaderLabel>
      </H1>
    </HeaderWrapper>
  )
}

export default TagDetailHeader
export * from './const'
