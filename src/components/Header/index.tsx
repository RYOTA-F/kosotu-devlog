import { FC } from 'react'
import Link from 'next/link'
/* Components */
import AccordionMenu from '@/components/AccordionMenu'
import { TwitterSvg } from '@/components/Elements/Svg'
import HamburgerMenu from '@/components/HamburgerMenu'
import Sidenav from '@/components/Sidenav'
/* Const */
import { SITE, PAGE, TWITTER } from '@/const/index'
import { HEADER, ARIA_LABEL } from './const'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'

const Header: FC = () => {
  const { globalMenu } = useCommonData()

  return (
    <>
      <div className="flex justify-between h-[22px] px-[7%] bg-blue-main tb:hidden">
        <span className="py-1 text-white text-[12px]">
          {HEADER.CATCH_PHRASE}
        </span>
        <ul className="flex">
          <li className="flex justify-center items-center py-1 h-[22px] w-[22px]">
            <Link href={TWITTER.URL} target="_blank">
              <TwitterSvg
                height={HEADER.ICON.HEIGHT}
                width={HEADER.ICON.WIDTH}
                color={HEADER.ICON.COLOR}
              />
            </Link>
          </li>
        </ul>
      </div>

      <header
        className="sticky top-0 z-50 flex h-[72px] justify-between bg-blue-main px-[7%] tb:justify-center tb:h-[48px]"
        aria-label={ARIA_LABEL.HEADER}
      >
        <Link href={PAGE.ROOT}>
          <h1 className="inline-block cursor-pointer text-2xl font-bold leading-[72px] tb:leading-[48px] text-white no-underline">
            {SITE.TITLE}
          </h1>
        </Link>

        <ul className="flex h-[100%] leading-[72px] text-white tb:hidden">
          {globalMenu.map((v) => (
            <li key={v.label}>
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

        <div className="pc:hidden">
          <HamburgerMenu />
          <Sidenav />
        </div>
      </header>
    </>
  )
}

export default Header
export * from './const'
