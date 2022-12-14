import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { SITE, PAGE, MENU_LIST } from '@/src/const'
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
    <HeaderWrapper>
      <Link href={PAGE.ROOT}>
        <Title>{SITE.TITLE}</Title>
      </Link>

      <MenuList>
        {MENU_LIST.map((v) => (
          <MenuItem>
            <Link key={v.URL} href={v.URL}>
              <MenuLabel>{v.LABEL}</MenuLabel>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </HeaderWrapper>
  )
}

export default Header
