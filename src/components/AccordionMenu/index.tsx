import { FC, useState } from 'react'
import Link from 'next/link'
/* Components */
import { ChevronRightSvg } from '@/components/Elements/Svg'
/* Const */
import { ARIA_LABEL } from './const'

interface Menu {
  label: string
  path: string
}

export interface IAccordionMenu {
  label: string
  path: string
  menuList: Menu[]
}

const AccordionMenu: FC<IAccordionMenu> = ({ label, path, menuList }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="mx-2 text-[14px] relative"
      aria-label={ARIA_LABEL.ACCORDION_MENU}
    >
      <Link href={path} className="block text-white">
        {label}
      </Link>
      {isOpen && menuList.length && (
        <ul
          className="bg-white absolute translate-x[25%] shadow-lg"
          aria-label={ARIA_LABEL.MENU_CONTAINER}
        >
          {menuList.map((v) => (
            <li key={v.label} className=" w-[200px]">
              <Link
                href={v.path}
                className="flex py-5 pl-1 text-stone-600 leading-[10px] hover:bg-gray-list hover:pl-3 transition-all"
              >
                <span className="mr-2">
                  <ChevronRightSvg height={12} width={12} />
                </span>
                {v.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AccordionMenu
export * from './const'
