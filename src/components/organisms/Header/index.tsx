import { FC } from 'react'
import Link from 'next/link'
/* Components */
import { TwitterSvg } from '@/components/atoms/Svg'
import AccordionMenu from '@/components/molecules/AccordionMenu'
/* Const */
import { SITE, PAGE, GROBAL_MENU_LIST, TWITTER } from '@/const/index'
import { HEADER, ARIA_LABEL } from './const'
/* Styles */
import {
  HeaderBar,
  CatchPrase,
  IconList,
  Icon,
  HeaderWrapper,
  Title,
  MenuList,
  MenuItem,
} from './index.styles'

const Header: FC = () => {
  return (
    <>
      <HeaderBar>
        <CatchPrase>{HEADER.CATCH_PHRASE}</CatchPrase>
        <IconList>
          <Icon>
            <Link href={TWITTER.URL} target="_blank">
              <TwitterSvg
                height={HEADER.ICON.HEIGHT}
                width={HEADER.ICON.WIDTH}
                color={HEADER.ICON.COLOR}
              />
            </Link>
          </Icon>
        </IconList>
      </HeaderBar>
      <HeaderWrapper aria-label={ARIA_LABEL.HEADER}>
        <Link href={PAGE.ROOT}>
          <Title>{SITE.TITLE}</Title>
        </Link>
        <MenuList>
          {GROBAL_MENU_LIST.map((v) => (
            <MenuItem key={v.URL}>
              <AccordionMenu
                label={v.LABEL}
                path={v.URL}
                menuList={v.LIST.map((v) => ({ label: v.LABEL, path: v.URL }))}
              />
            </MenuItem>
          ))}
        </MenuList>
      </HeaderWrapper>
    </>
  )
}

export default Header
export * from './const'
