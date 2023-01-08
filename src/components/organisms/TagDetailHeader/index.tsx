import { FC } from 'react'
/* Components */
import { H1 } from '@/components/atoms/Heading'
/* Const */
import { TAG_DETAIL_HEADER, ARIA_LABEL } from './const'
/* Hooks */
import useTagData from '@/hooks/useTagData'
/* Styles */
import { HeaderWrapper, HeaderLabel } from './index.styles'

const TagDetailHeader: FC = () => {
  const { tag } = useTagData()

  return (
    <HeaderWrapper aria-label={ARIA_LABEL.TAG_DETAIL_HEADER}>
      <H1>
        {tag.name}
        <HeaderLabel>{TAG_DETAIL_HEADER.TITLE_LABEL}</HeaderLabel>
      </H1>
    </HeaderWrapper>
  )
}

export default TagDetailHeader
export * from './const'
