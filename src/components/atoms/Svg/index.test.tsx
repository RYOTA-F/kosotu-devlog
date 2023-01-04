import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {
  ChevronRightSvg,
  CHEVRON_RIGHT_SVG_ARIA_LABEL,
  FolderSvg,
  FOLDER_SVG_ARIA_LABEL,
  HomeSvg,
  HOME_SVG_ARIA_LABEL,
  TagSvg,
  TAG_SVG_ARIA_LABEL,
  TimeSvg,
  TIME_SVG_ARIA_LABEL,
  ListSvg,
  LIST_SVG_ARIA_LABEL,
  TwitterSvg,
  TWITTER_SVG_ARIA_LABEL,
} from '.'
import { defaultProps } from './__mocks__'

describe('Svg', () => {
  describe('ChevronRightSvg', () => {
    test('描画される', () => {
      render(<ChevronRightSvg {...defaultProps} />)

      const chevronRightSvgElement = screen.getByLabelText(
        CHEVRON_RIGHT_SVG_ARIA_LABEL
      )
      expect(chevronRightSvgElement).toBeInTheDocument()
    })
  })

  describe('FolderSvg', () => {
    test('描画される', () => {
      render(<FolderSvg {...defaultProps} />)

      const folderSvgElement = screen.getByLabelText(FOLDER_SVG_ARIA_LABEL)
      expect(folderSvgElement).toBeInTheDocument()
    })
  })

  describe('HomeSvg', () => {
    test('描画される', () => {
      render(<HomeSvg {...defaultProps} />)

      const homeSvgElement = screen.getByLabelText(HOME_SVG_ARIA_LABEL)
      expect(homeSvgElement).toBeInTheDocument()
    })
  })

  describe('TagSvg', () => {
    test('描画される', () => {
      render(<TagSvg {...defaultProps} />)

      const tagSvgElement = screen.getByLabelText(TAG_SVG_ARIA_LABEL)
      expect(tagSvgElement).toBeInTheDocument()
    })
  })

  describe('TimeSvg', () => {
    test('描画される', () => {
      render(<TimeSvg {...defaultProps} />)

      const timeSvgElement = screen.getByLabelText(TIME_SVG_ARIA_LABEL)
      expect(timeSvgElement).toBeInTheDocument()
    })
  })

  describe('ListSvg', () => {
    test('描画される', () => {
      render(<ListSvg {...defaultProps} />)

      const listSvgElement = screen.getByLabelText(LIST_SVG_ARIA_LABEL)
      expect(listSvgElement).toBeInTheDocument()
    })
  })

  describe('TwitterSvg', () => {
    test('描画される', () => {
      render(<TwitterSvg {...defaultProps} />)

      const twitterSvgElement = screen.getByLabelText(TWITTER_SVG_ARIA_LABEL)
      expect(twitterSvgElement).toBeInTheDocument()
    })
  })
})
