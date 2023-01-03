import { FC } from 'react'
/* Const */
import { COLOR } from '@/const/index'
/* Types */
import { ISvgDefaultProps } from '../types'

export const TAG_SVG_ARIA_LABEL = 'tagSvg' as const

const TagSvg: FC<ISvgDefaultProps> = ({
  width = 50,
  height = 50,
  color = COLOR.GRAY_SCALE.GRAY.TEXT_3,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label={TAG_SVG_ARIA_LABEL}
    >
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

export default TagSvg
