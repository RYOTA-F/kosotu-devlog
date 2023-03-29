import { FC } from 'react'
import Link from 'next/link'
/* Components */
import { HomeSvg } from '@/components/Elements/Svg'
/* Const */
import { PAGE } from '@/const/index'
import { BREAD_CRUMB, ARIA_LABEL } from './const'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'

const BreadCrumb: FC = () => {
  const { breadCrumb } = useCommonData()

  return (
    <>
      {breadCrumb && (
        <ol
          className="flex items-center py-2 pl-[7%] sp:pl-0 bg-gray-list shadow-inherit text-[12px] text-gray-text-t1 whitespace-nowrap overflow-x-hidden"
          aria-label={ARIA_LABEL.BREAD_CRUMB}
        >
          <li>
            <Link
              href={PAGE.ROOT}
              className="flex items-center hover:opacity-70 hover:underline"
            >
              <HomeSvg
                width={BREAD_CRUMB.HOME.SVG.SIZE}
                height={BREAD_CRUMB.HOME.SVG.SIZE}
              />
              <span className="ml-1">{BREAD_CRUMB.HOME.TEXT}</span>
            </Link>
          </li>

          {breadCrumb.categoryParentId && breadCrumb.categoryParentName && (
            <li className="ml-2">
              <span className="mr-1">{' >'}</span>
              <Link
                href={`${PAGE.CATEGORY}${breadCrumb.categoryParentId}`}
                className="hover:opacity-70 hover:underline"
              >
                {breadCrumb.categoryParentName}
              </Link>
            </li>
          )}

          {breadCrumb.categoryChildId && breadCrumb.categoryChildName && (
            <li className="ml-2">
              <span className="mr-1">{' >'}</span>
              <Link
                href={`${PAGE.CATEGORY}${breadCrumb.categoryChildId}`}
                className=" hover:opacity-70 hover:underline"
              >
                {breadCrumb.categoryChildName}
              </Link>
            </li>
          )}

          {breadCrumb?.currentName && (
            <li className="ml-2">
              <span className="mr-1">{' >'}</span>
              {breadCrumb.currentName}
            </li>
          )}
        </ol>
      )}
    </>
  )
}

export default BreadCrumb
export * from './const'
