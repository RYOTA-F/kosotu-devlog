import { FC } from 'react'
import Link from 'next/link'
/* Components */
import { HomeSvg } from '@/components/Elements/Svg'
/* Const */
import { PAGE } from '@/const/index'
import { BREAD_CRUMB, ARIA_LABEL } from './const'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
import useMediaQuery from '@/hooks/useMediaQuery'
/* Styles */
import { BreadCrumbWrapper, ListItem, Title, HomeWrapper } from './index.styles'

const BreadCrumb: FC = () => {
  const { breadCrumb } = useCommonData()
  const { isSP } = useMediaQuery()

  return (
    <>
      {breadCrumb && (
        <BreadCrumbWrapper isSP={isSP} aria-label={ARIA_LABEL.BREAD_CRUMB}>
          <ListItem>
            <Link href={PAGE.ROOT}>
              <HomeSvg
                width={BREAD_CRUMB.HOME.SVG.SIZE}
                height={BREAD_CRUMB.HOME.SVG.SIZE}
              />
              <HomeWrapper>{BREAD_CRUMB.HOME.TEXT}</HomeWrapper>
            </Link>
          </ListItem>

          {breadCrumb.categoryParentId && breadCrumb.categoryParentName && (
            <ListItem>
              <Link href={`${PAGE.CATEGORY}${breadCrumb.categoryParentId}`}>
                {breadCrumb.categoryParentName}
              </Link>
            </ListItem>
          )}

          {breadCrumb.categoryChildId && breadCrumb.categoryChildName && (
            <ListItem>
              <Link href={`${PAGE.CATEGORY}${breadCrumb.categoryChildId}`}>
                {breadCrumb.categoryChildName}
              </Link>
            </ListItem>
          )}

          {breadCrumb?.currentName && <Title>{breadCrumb.currentName}</Title>}
        </BreadCrumbWrapper>
      )}
    </>
  )
}

export default BreadCrumb
export * from './const'
