import { FC } from 'react'
import { Link } from 'react-scroll' // eslint-disable-line import/named
/* Components */
import { ListSvg } from '@/components/Elements/Svg'
/* Const */
import { TOC, ARIA_LABEL, LIST_SVG } from './const'
/* Hooks */
import useMediaQuery from '@/hooks/useMediaQuery'
/* Styles */
import {
  Wrapper,
  Title,
  ListSvgWrapper,
  List,
  ListH2,
  ListH3,
  LinkText,
} from './index.styles'
/* Types */
import { ITableOfContents } from '@/types/index'

export interface ITableOfContentsProps {
  tableOfContents: ITableOfContents[]
}

const TableOfContents: FC<ITableOfContentsProps> = ({ tableOfContents }) => {
  const { isSP } = useMediaQuery()

  return (
    <Wrapper isSP={isSP} aria-label={ARIA_LABEL}>
      <Title>
        <ListSvgWrapper>
          <ListSvg height={LIST_SVG.SIZE} width={LIST_SVG.SIZE} />
        </ListSvgWrapper>
        {TOC.TITLE}
      </Title>
      <List>
        {tableOfContents.map((v) => {
          if (v.type === TOC.H2)
            return <ListH2 key={v.id}>{LinkItem(v)}</ListH2>
          if (v.type === TOC.H3)
            return <ListH3 key={v.id}>{LinkItem(v)}</ListH3>
        })}
      </List>
    </Wrapper>
  )
}

const LinkItem = (item: ITableOfContents) => (
  <Link
    to={item.id}
    smooth={TOC.LINK.SMOOTH}
    duration={TOC.LINK.DURATION}
    offset={TOC.LINK.OFFSET}
  >
    <LinkText>{item.text}</LinkText>
  </Link>
)

export default TableOfContents
export * from './const'
