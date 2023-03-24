import { FC } from 'react'
/* Components */
import { H1 } from '@/components/atoms/Heading'
import CategoryItem from '@/components/atoms/CategoryItem'
import CategoryLabel from '@/components/atoms/CategoryLabel'
import { ChevronRightSvg, FolderSvg } from '@/components/atoms/Svg'
/* Const */
import { CATEGORY_DETAIL_HEADER, ARIA_LABEL } from './const'
/* Hooks */
import useCategoryData from '@/hooks/useCategoryData'
import useMediaQuery from '@/hooks/useMediaQuery'
/* Styles */
import {
  CategoryDetailHeaderWrapper,
  HeaderWrapper,
  HeaderLabel,
  CategoryWrapper,
  FolderSvgWrapper,
  ChevronRightSvgWrapper,
} from './index.styles'
/* Utils */
import { getCategoryRelation } from '@/utils/index'

const CategoryDetailHeader: FC = () => {
  const { category } = useCategoryData()
  const { isSP } = useMediaQuery()
  const { isParent, categoryParent } = getCategoryRelation(category.relation)

  return (
    <CategoryDetailHeaderWrapper aria-label={ARIA_LABEL.CATEGORY_DETAIL_HEADER}>
      <HeaderWrapper isSP={isSP}>
        <H1>
          {category.name}
          <HeaderLabel isSP={isSP}>
            {CATEGORY_DETAIL_HEADER.TITLE_LABEL}
          </HeaderLabel>
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
        {/* 親カテゴリの場合 親カテゴリのラベルを表示 */}
        {isParent && <CategoryLabel name={category.name} />}
        {/* 子カテゴリの場合 親カテゴリへのリンクを表示 */}
        {!isParent && categoryParent && (
          <CategoryItem
            category={{
              id: categoryParent.id,
              name: categoryParent.name,
            }}
          />
        )}
        {/* 子カテゴリの場合 子カテゴリのラベルを表示 */}
        {!isParent && (
          <>
            <ChevronRightSvgWrapper isSP={isSP}>
              <ChevronRightSvg
                height={CATEGORY_DETAIL_HEADER.CHEVRON_RIGHT_SVG.SIZE}
                width={CATEGORY_DETAIL_HEADER.CHEVRON_RIGHT_SVG.SIZE}
                color={CATEGORY_DETAIL_HEADER.CHEVRON_RIGHT_SVG.COLOR}
              />
            </ChevronRightSvgWrapper>
            <CategoryLabel name={category.name} />
          </>
        )}
      </CategoryWrapper>
    </CategoryDetailHeaderWrapper>
  )
}

export default CategoryDetailHeader
export * from './const'
