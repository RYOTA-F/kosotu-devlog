import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { ARIA_LABEL } from './const'
/* Styles */
import { SitemapItemWrapper } from './index.styles'

export type ISitemapItemType = 'top' | 'parent' | 'children' | 'blog'

export interface ISitemapItem {
  type: ISitemapItemType
  label: string
  url: string
}

const SitemapItem: FC<ISitemapItem> = ({ type, label, url }) => {
  return (
    <SitemapItemWrapper type={type} aria-label={ARIA_LABEL}>
      <Link href={url}>{label}</Link>
    </SitemapItemWrapper>
  )
}

export default SitemapItem
export * from './const'
