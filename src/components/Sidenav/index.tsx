import { FC } from 'react'
import Link from 'next/link'
/* Components */
import { ChevronRightSvg } from '@/components/Elements/Svg'
/* Const */
import { ARIA_LABEL, LABEL } from './const'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'

const Sidenav: FC = () => {
  const { globalMenu, isViewSidenav } = useCommonData()

  return (
    <nav
      className="fixed top-[72px] tb:top-[48px] w-[100vw] bg-white transition-all duration-500 overflow-y-scroll h-[calc(100vh_-_48px)]"
      style={isViewSidenav ? { right: 0 } : { right: '-120%' }}
      aria-label={ARIA_LABEL}
    >
      <div className="w-full pt-5">
        <h2 className="mx-auto py-2 px-3 w-[80%] bg-blue-main text-white text-xl text-center rounded">
          {LABEL}
        </h2>
        <ul className="w-[80%] my-3 mx-auto">
          {globalMenu.map((parent) => (
            <div key={parent.label}>
              <li className="ml-3 border-b-[1px] border-gray-border">
                <Link
                  href={parent.url}
                  className="flex items-center text-stone-600 leading-[3]  hover:bg-gray-list transition-all hover:pl-4"
                >
                  <span className="mr-1">
                    <ChevronRightSvg height={12} width={12} />
                  </span>
                  {parent.label}
                </Link>
              </li>

              {parent.children.map((children) => (
                <li
                  key={children.label}
                  className="ml-8 border-b-[1px] border-gray-border"
                >
                  <Link
                    href={children.url}
                    className="flex items-center text-stone-600 leading-[3]  hover:bg-gray-list transition-all hover:pl-4"
                  >
                    <span className="mr-1">
                      <ChevronRightSvg height={12} width={12} />
                    </span>
                    {children.label}
                  </Link>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidenav
export * from './const'
