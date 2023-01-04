import { FC } from 'react'
/* Components */
import { H1 } from '@/components/atoms/Heading'
import CategoryItem from '@/components/atoms/CategoryItem'
import CategoryLabel from '@/components/atoms/CategoryLabel'
import { ChevronRightSvg, FolderSvg } from '@/components/atoms/Svg'
/* Const */
import { CATEGORY_DETAIL_HEADER, ARIA_LABEL } from './const'
/* Styles */
import {
  HeaderWrapper,
  HeaderLabel,
  CategoryWrapper,
  FolderSvgWrapper,
  ChevronRightSvgWrapper,
} from './index.styles'
/* Types */
import { ICategory } from '@/types/microCMS/category'
/* Utils */
import { getCategoryParentId } from '@/utils/blogCategory'

export type TCategoryDetailHeader = Pick<ICategory, 'name' | 'parent'>

const CategoryDetailHeader: FC<TCategoryDetailHeader> = ({ name, parent }) => {
  return (
    <div aria-label={ARIA_LABEL.CATEGORY_DETAIL_HEADER}>
      <HeaderWrapper>
        <H1>
          {name}
          <HeaderLabel>{CATEGORY_DETAIL_HEADER.TITLE_LABEL}</HeaderLabel>
        </H1>
      </HeaderWrapper>
      <CategoryWrapper>
        <FolderSvgWrapper>
          <FolderSvg
            height={CATEGORY_DETAIL_HEADER.FOLDER_SVG.SIZE}
            width={CATEGORY_DETAIL_HEADER.FOLDER_SVG.SIZE}
            color={CATEGORY_DETAIL_HEADER.FOLDER_SVG.COLOR}
            fill={CATEGORY_DETAIL_HEADER.FOLDER_SVG.FILL}
          />
        </FolderSvgWrapper>
        <CategoryItem
          category={{
            id: getCategoryParentId(parent[0]),
            name: parent[0],
          }}
        />
        <ChevronRightSvgWrapper>
          <ChevronRightSvg
            height={CATEGORY_DETAIL_HEADER.CHEVRON_RIGHT_SVG.SIZE}
            width={CATEGORY_DETAIL_HEADER.CHEVRON_RIGHT_SVG.SIZE}
            color={CATEGORY_DETAIL_HEADER.CHEVRON_RIGHT_SVG.COLOR}
          />
        </ChevronRightSvgWrapper>
        <CategoryLabel name={name} />
      </CategoryWrapper>
    </div>
  )
}

export default CategoryDetailHeader
export * from './const'
