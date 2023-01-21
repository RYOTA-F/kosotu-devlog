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

// TODO: Propsのmacher確認

describe('Svg', () => {
  describe('ChevronRightSvg', () => {
    test('描画される', () => {
      render(<ChevronRightSvg />)

      const chevronRightSvgElement = screen.getByLabelText(
        CHEVRON_RIGHT_SVG_ARIA_LABEL
      )
      expect(chevronRightSvgElement).toBeInTheDocument()
    })

    test('Props が反映される', () => {
      render(<ChevronRightSvg {...defaultProps} />)

      const chevronRightSvgElement = screen.getByLabelText(
        CHEVRON_RIGHT_SVG_ARIA_LABEL
      )

      expect(chevronRightSvgElement).toBeInTheDocument()
    })
  })

  describe('FolderSvg', () => {
    test('描画される', () => {
      render(<FolderSvg />)

      const folderSvgElement = screen.getByLabelText(FOLDER_SVG_ARIA_LABEL)
      expect(folderSvgElement).toBeInTheDocument()
    })

    test('Props が反映される', () => {
      render(<FolderSvg {...defaultProps} />)

      const folderSvgElement = screen.getByLabelText(FOLDER_SVG_ARIA_LABEL)
      expect(folderSvgElement).toBeInTheDocument()
    })
  })

  describe('HomeSvg', () => {
    test('描画される', () => {
      render(<HomeSvg />)

      const homeSvgElement = screen.getByLabelText(HOME_SVG_ARIA_LABEL)
      expect(homeSvgElement).toBeInTheDocument()
    })

    test('Props が反映される', () => {
      render(<HomeSvg {...defaultProps} />)

      const homeSvgElement = screen.getByLabelText(HOME_SVG_ARIA_LABEL)
      expect(homeSvgElement).toBeInTheDocument()
    })
  })

  describe('TagSvg', () => {
    test('描画される', () => {
      render(<TagSvg />)

      const tagSvgElement = screen.getByLabelText(TAG_SVG_ARIA_LABEL)
      expect(tagSvgElement).toBeInTheDocument()
    })

    test('Props が反映される', () => {
      render(<TagSvg {...defaultProps} />)

      const tagSvgElement = screen.getByLabelText(TAG_SVG_ARIA_LABEL)
      expect(tagSvgElement).toBeInTheDocument()
    })
  })

  describe('TimeSvg', () => {
    test('描画される', () => {
      render(<TimeSvg />)

      const timeSvgElement = screen.getByLabelText(TIME_SVG_ARIA_LABEL)
      expect(timeSvgElement).toBeInTheDocument()
    })

    test('Props が反映される', () => {
      render(<TimeSvg {...defaultProps} />)

      const timeSvgElement = screen.getByLabelText(TIME_SVG_ARIA_LABEL)
      expect(timeSvgElement).toBeInTheDocument()
    })
  })

  describe('ListSvg', () => {
    test('描画される', () => {
      render(<ListSvg />)

      const listSvgElement = screen.getByLabelText(LIST_SVG_ARIA_LABEL)
      expect(listSvgElement).toBeInTheDocument()
    })

    test('Props が反映される', () => {
      render(<ListSvg {...defaultProps} />)

      const listSvgElement = screen.getByLabelText(LIST_SVG_ARIA_LABEL)
      expect(listSvgElement).toBeInTheDocument()
    })
  })

  describe('TwitterSvg', () => {
    test('描画される', () => {
      render(<TwitterSvg />)

      const twitterSvgElement = screen.getByLabelText(TWITTER_SVG_ARIA_LABEL)
      expect(twitterSvgElement).toBeInTheDocument()
    })

    test('Props が反映される', () => {
      render(<TwitterSvg {...defaultProps} />)

      const twitterSvgElement = screen.getByLabelText(TWITTER_SVG_ARIA_LABEL)
      expect(twitterSvgElement).toBeInTheDocument()
    })
  })
})
