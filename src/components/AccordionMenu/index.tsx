import { FC, useState } from 'react'
import Link from 'next/link'
/* Components */
import { ChevronRightSvg } from '@/components/Elements/Svg'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import {
  AccordionMenuWrapper,
  MenuContainer,
  MenuItem,
  ChevronRightSvgWrapper,
} from './index.styles'

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
    <AccordionMenuWrapper
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      aria-label={ARIA_LABEL.ACCORDION_MENU}
    >
      <Link href={path}>{label}</Link>
      {isOpen && menuList.length && (
        <MenuContainer aria-label={ARIA_LABEL.MENU_CONTAINER}>
          {menuList.map((v) => (
            <MenuItem key={v.label}>
              <Link href={v.path}>
                <ChevronRightSvgWrapper>
                  <ChevronRightSvg height={12} width={12} />
                </ChevronRightSvgWrapper>
                {v.label}
              </Link>
            </MenuItem>
          ))}
        </MenuContainer>
      )}
    </AccordionMenuWrapper>
  )
}

export default AccordionMenu
export * from './const'
