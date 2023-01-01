import { FC } from 'react'
/* Components */
import { ListSvg } from '@/components/atoms/Svg'
/* Const */
import { TOC, ARIA_LABEL, LIST_SVG } from './const'
/* Styles */
import {
  Wrapper,
  Title,
  ListSvgWrapper,
  List,
  ListH2,
  ListH3,
  ListLink,
} from './index.styles'
/* Types */
import { IBlog } from '@/types/index'

export interface ITableOfContents {
  tableOfContents: IBlog['tableOfContents']
}

const TableOfContents: FC<ITableOfContents> = ({ tableOfContents }) => {
  return (
    <Wrapper aria-label={ARIA_LABEL}>
      <Title>
        <ListSvgWrapper>
          <ListSvg height={LIST_SVG.SIZE} width={LIST_SVG.SIZE} />
        </ListSvgWrapper>
        {TOC.TITLE}
      </Title>
      <List>
        {tableOfContents.map((v) => {
          if (v.type === TOC.H2)
            return (
              <ListH2 key={v.id}>
                <ListLink href={`#${v.id}`}>{v.text}</ListLink>
              </ListH2>
            )
          if (v.type === TOC.H3)
            return (
              <ListH3 key={v.id}>
                <ListLink href={`#${v.id}`}>{v.text}</ListLink>
              </ListH3>
            )
        })}
      </List>
    </Wrapper>
  )
}

export default TableOfContents
export * from './const'
