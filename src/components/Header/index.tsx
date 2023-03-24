import { FC } from 'react'
import Link from 'next/link'
/* Components */
import AccordionMenu from '@/components/AccordionMenu'
// import { TwitterSvg } from '@/components/Elements/Svg'
// import HamburgerMenu from '@/components/HamburgerMenu'
// import Sidenav from '@/components/Sidenav'
/* Const */
import {
  SITE,
  PAGE,
  // TWITTER
} from '@/const/index'
import {
  //  HEADER,
  ARIA_LABEL,
} from './const'
/* Hooks */
import useMediaQuery from '@/hooks/useMediaQuery'
import useCommonData from '@/hooks/useCommonData'

const Header: FC = () => {
  const { globalMenu } = useCommonData()
  const {
    isPC,
    // isTB
  } = useMediaQuery()

  return (
    <>
      {/* {isPC && (
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
      )} */}

      <header
        className="sticky top-0 z-50 flex h-[72px] justify-between bg-blue-main px-[10%]"
        aria-label={ARIA_LABEL.HEADER}
      >
        <Link href={PAGE.ROOT}>
          <h1 className="inline-block cursor-pointer text-2xl font-bold leading-[72px] text-white no-underline">
            {SITE.TITLE}
          </h1>
        </Link>

        {isPC && (
          <ul className="flex h-[100%] leading-[72px] text-white">
            {globalMenu.map((v) => (
              <li key={v.label} className="mx-3">
                <AccordionMenu
                  label={v.label}
                  path={v.url}
                  menuList={v.children.map((children) => ({
                    label: children.label,
                    path: children.url,
                  }))}
                />
              </li>
            ))}
          </ul>
        )}

        {/* {!isPC && (
          <>
            <HamburgerMenu />
            <Sidenav />
          </>
        )} */}
      </header>
    </>
  )
}

export default Header
export * from './const'
