import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CategoryDetailHeader, { ARIA_LABEL } from '.'
import { ARIA_LABEL as CATEGORY_ITEM_ARIA_LABEL } from '@/components/atoms/CategoryItem'
import { ARIA_LABEL as CATEGORY_LABEL_ARIA_LABEL } from '@/components/atoms/CategoryLabel'
import {
  FOLDER_SVG_ARIA_LABEL,
  CHEVRON_RIGHT_SVG_ARIA_LABEL,
} from '@/components/atoms/Svg'
import CategoryContextProviderMock from '@/stores/__mocks__/category'

describe('CategoryDetailHeader', () => {
  beforeEach(() => {
    render(
      <CategoryContextProviderMock>
        <CategoryDetailHeader />
      </CategoryContextProviderMock>
    )
  })

  test('描画される', () => {
    const categoryDetailHeaderElement = screen.getByLabelText(
      ARIA_LABEL.CATEGORY_DETAIL_HEADER
    )

    expect(categoryDetailHeaderElement).toBeInTheDocument()
  })

  describe('FolderSvg', () => {
    test('描画される', () => {
      const folderSvgElement = screen.getByLabelText(FOLDER_SVG_ARIA_LABEL)

      expect(folderSvgElement).toBeInTheDocument()
    })
  })

  describe('ChevronRightSvg', () => {
    test('描画される', () => {
      const chevronRightSvgElement = screen.getByLabelText(
        CHEVRON_RIGHT_SVG_ARIA_LABEL
      )

      expect(chevronRightSvgElement).toBeInTheDocument()
    })
  })

  describe('CategoryItem', () => {
    test('描画される', () => {
      const categoryItemElement = screen.getByLabelText(
        CATEGORY_ITEM_ARIA_LABEL
      )

      expect(categoryItemElement).toBeInTheDocument()
    })
  })

  describe('CategoryLabel', () => {
    test('描画される', () => {
      const categoryLabelElement = screen.getByLabelText(
        CATEGORY_LABEL_ARIA_LABEL
      )

      expect(categoryLabelElement).toBeInTheDocument()
    })
  })
})
