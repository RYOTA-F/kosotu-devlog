import { FC } from 'react'
/* Const */
import { CATEGORY_DETAIL_HEADER, ARIA_LABEL } from './const'
/* Components */
import { H1 } from '@/components/Elements/Heading'
import { ChevronRightSvg, FolderSvg } from '@/components/Elements/Svg'
/* Features */
import CategoryItem from '@/features/categories/CategoryItem'
import CategoryLabel from '@/features/categories/CategoryLabel'
/* Hooks */
import useCategoryData from '@/hooks/useCategoryData'
/* Utils */
import { getCategoryRelation } from '@/utils/index'

const CategoryDetailHeader: FC = () => {
  const { category } = useCategoryData()
  const { isParent, categoryParent } = getCategoryRelation(category.relation)

  return (
    <div aria-label={ARIA_LABEL}>
      <div className="mb-8 sp:mb-6">
        <H1>
          {category.name}
          <span className="ml-5 text-gray-text-t1 text-base font-bold">
            {CATEGORY_DETAIL_HEADER.TITLE_LABEL.BEFORE}
            {CATEGORY_DETAIL_HEADER.TITLE_LABEL.TEXT}
            {CATEGORY_DETAIL_HEADER.TITLE_LABEL.AFTER}
          </span>
        </H1>
      </div>
      <div className="flex items-center">
        <div className="mr-2 pt-1">
          <FolderSvg
            height={CATEGORY_DETAIL_HEADER.FOLDER_SVG.SIZE}
            width={CATEGORY_DETAIL_HEADER.FOLDER_SVG.SIZE}
            color={CATEGORY_DETAIL_HEADER.FOLDER_SVG.COLOR}
            fill={CATEGORY_DETAIL_HEADER.FOLDER_SVG.FILL}
          />
        </div>
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
            <div className="mx-2 sp:mx-1">
              <ChevronRightSvg
                height={CATEGORY_DETAIL_HEADER.CHEVRON_RIGHT_SVG.SIZE}
                width={CATEGORY_DETAIL_HEADER.CHEVRON_RIGHT_SVG.SIZE}
                color={CATEGORY_DETAIL_HEADER.CHEVRON_RIGHT_SVG.COLOR}
              />
            </div>
            <CategoryLabel name={category.name} />
          </>
        )}
      </div>
    </div>
  )
}

export default CategoryDetailHeader
export * from './const'
