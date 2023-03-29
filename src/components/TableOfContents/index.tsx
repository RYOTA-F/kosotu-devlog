import { FC } from 'react'
import { Link } from 'react-scroll' // eslint-disable-line import/named
/* Components */
import { ListSvg } from '@/components/Elements/Svg'
/* Const */
import { TOC, ARIA_LABEL, LIST_SVG } from './const'
/* Types */
import { ITableOfContents } from '@/types/index'

export interface ITableOfContentsProps {
  tableOfContents: ITableOfContents[]
}

const TableOfContents: FC<ITableOfContentsProps> = ({ tableOfContents }) => (
  <div
    className="w-[90%] p-8 bg-clip-padding bg-gradient-to-br from-transparent to-transparent border-double  border-b-[3px] border-t-[3px] border-gray-300 bg-gray-50"
    aria-label={ARIA_LABEL}
  >
    <h2 className="flex items-center justify-center text-gray-text-t1 text-[18px]">
      <span className="mr-2">
        <ListSvg height={LIST_SVG.SIZE} width={LIST_SVG.SIZE} />
      </span>
      {TOC.TITLE}
    </h2>
    <ul className="mt-4">
      {tableOfContents.map((v) => {
        if (v.type === TOC.H2)
          return (
            <li key={v.id} className="mt-4 mb-3 pl-2 cursor-pointer">
              <span className="opacity-70 text-blue-main">・| </span>
              <span className="hover:border-b-2 border-blue-main hover:opacity-60">
                <Link
                  to={v.id}
                  smooth={TOC.LINK.SMOOTH}
                  duration={TOC.LINK.DURATION}
                  offset={TOC.LINK.OFFSET}
                >
                  {v.text}
                </Link>
              </span>
            </li>
          )
        if (v.type === TOC.H3)
          return (
            <li key={v.id} className="py-2 pl-10 cursor-pointer">
              <span className="opacity-70 text-blue-main">・| </span>
              <span className="hover:border-b-2 border-blue-main hover:opacity-60">
                <Link
                  to={v.id}
                  smooth={TOC.LINK.SMOOTH}
                  duration={TOC.LINK.DURATION}
                  offset={TOC.LINK.OFFSET}
                >
                  {v.text}
                </Link>
              </span>
            </li>
          )
      })}
    </ul>
  </div>
)

export default TableOfContents
export * from './const'
