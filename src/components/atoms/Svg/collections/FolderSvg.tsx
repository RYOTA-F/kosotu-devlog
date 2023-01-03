import { FC } from 'react'
/* Const */
import { COLOR } from '@/const/index'
/* Types */
import { ISvgDefaultProps } from '../types'

export const FOLDER_SVG_ARIA_LABEL = 'folderSvg' as const

const FolderSvg: FC<ISvgDefaultProps> = ({
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
      aria-label={FOLDER_SVG_ARIA_LABEL}
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export default FolderSvg
