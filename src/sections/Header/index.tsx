import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { SITE, PAGE, GROBAL_MENU_LIST } from '@/const/index'
import { ARIA_LABEL } from './const'
/* Styles */
import {
  HeaderWrapper,
  Title,
  MenuList,
  MenuItem,
  MenuLabel,
} from './index.styles'

const Header: FC = () => {
  return (
    <HeaderWrapper aria-label={ARIA_LABEL.HEADER}>
      <Link href={PAGE.ROOT}>
        <Title>{SITE.TITLE}</Title>
      </Link>

      <MenuList>
        {GROBAL_MENU_LIST.map((v) => (
          <MenuItem key={v.URL}>
            <Link href={v.URL}>
              <MenuLabel>{v.LABEL}</MenuLabel>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </HeaderWrapper>
  )
}

export default Header
export * from './const'
