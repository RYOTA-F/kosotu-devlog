import { FC } from 'react'
import Link from 'next/link'
/* Components */
import { HomeSvg } from '@/components/atoms/Svg'
/* Const */
import { PAGE } from '@/const/index'
import { BREAD_CRUMB, ARIA_LABEL } from './const'
/* Styles */
import { BreadCrumbWrapper, ListItem, Title, HomeWrapper } from './index.styles'
/* Types */
import { IBlogBreadCrumb } from '@/types/index'

export interface IBreadCrumb {
  breadCrumb: IBlogBreadCrumb
}

const BreadCrumb: FC<IBreadCrumb> = ({ breadCrumb }) => {
  return (
    <BreadCrumbWrapper aria-label={ARIA_LABEL.BREAD_CRUMB}>
      <ListItem>
        <Link href={PAGE.ROOT}>
          <HomeSvg
            width={BREAD_CRUMB.HOME.SVG.SIZE}
            height={BREAD_CRUMB.HOME.SVG.SIZE}
          />
          <HomeWrapper>{BREAD_CRUMB.HOME.TEXT}</HomeWrapper>
        </Link>
      </ListItem>
      <ListItem>
        <Link href={`${PAGE.CATEGORIES}/${breadCrumb.categoryParentId}`}>
          {breadCrumb.categoryParentName}
        </Link>
      </ListItem>
      <ListItem>
        <Link href={`${PAGE.CATEGORIES}/${breadCrumb.categoryChildId}`}>
          {breadCrumb.categoryChildName}
        </Link>
      </ListItem>
      <Title>{breadCrumb.blogTitle}</Title>
    </BreadCrumbWrapper>
  )
}

export default BreadCrumb
export * from './const'
