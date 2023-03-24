import { FC } from 'react'
import Link from 'next/link'
/* Components */
import { TwitterSvg } from '@/components/atoms/Svg'
import HamburgerMenu from '@/components/atoms/HamburgerMenu'
import AccordionMenu from '@/components/molecules/AccordionMenu'
import Sidenav from '@/components/Sidenav'
/* Const */
import { SITE, PAGE, TWITTER } from '@/const/index'
import { HEADER, ARIA_LABEL } from './const'
/* Hooks */
import useMediaQuery from '@/hooks/useMediaQuery'
import useCommonData from '@/hooks/useCommonData'
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
  const { globalMenu } = useCommonData()
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
        <Link href={PAGE.ROOT}>
          <Title isPC={isPC} isTB={isTB}>
            {SITE.TITLE}
          </Title>
        </Link>

        {isPC && (
          <MenuList>
            {globalMenu.map((v) => (
              <MenuItem key={v.label}>
                <AccordionMenu
                  label={v.label}
                  path={v.url}
                  menuList={v.children.map((children) => ({
                    label: children.label,
                    path: children.url,
                  }))}
                />
              </MenuItem>
            ))}
          </MenuList>
        )}

        {!isPC && (
          <>
            <HamburgerMenu />
            <Sidenav />
          </>
        )}
      </HeaderWrapper>
    </>
  )
}

export default Header
export * from './const'
