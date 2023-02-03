import { FC } from 'react'
import Link from 'next/link'
/* Components */
import { TwitterSvg } from '@/components/atoms/Svg'
import HamburgerMenu from '@/components/atoms/HamburgerMenu'
import AccordionMenu from '@/components/molecules/AccordionMenu'
/* Const */
import { SITE, PAGE, GROBAL_MENU_LIST, TWITTER } from '@/const/index'
import { HEADER, ARIA_LABEL } from './const'
/* Hooks */
import useMediaQuery from '@/hooks/useMediaQuery'
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
  const { isPC, isTB } = useMediaQuery()

  return (
    <>
      {isPC && (
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
      )}

      <HeaderWrapper isPC={isPC} aria-label={ARIA_LABEL.HEADER}>
        {!isPC && <HamburgerMenu />}
        <Link href={PAGE.ROOT}>
          <Title isPC={isPC} isTB={isTB}>
            {SITE.TITLE}
          </Title>
        </Link>

        {isPC && (
          <MenuList>
            {GROBAL_MENU_LIST.map((v) => (
              <MenuItem key={v.URL}>
                <AccordionMenu
                  label={v.LABEL}
                  path={v.URL}
                  menuList={v.LIST.map((v) => ({
                    label: v.LABEL,
                    path: v.URL,
                  }))}
                />
              </MenuItem>
            ))}
          </MenuList>
        )}
      </HeaderWrapper>
    </>
  )
}

export default Header
export * from './const'
