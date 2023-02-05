import { FC } from 'react'
import Link from 'next/link'
/* Components */
import { ChevronRightSvg } from '@/components/atoms/Svg'
/* Const */
import { GROBAL_MENU_LIST } from '@/const/index'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Styles */
import {
  Wrapper,
  Label,
  MenuList,
  MenuItem,
  ChevronRightSvgWrapper,
} from './index.styles'

export const ARIA_LABEL = 'sidenav' as const
export const LABEL = 'MENU' as const

const Sidenav: FC = () => {
  const { isViewSidenav } = useCommonData()

  return (
    <Wrapper isView={isViewSidenav} aria-label={ARIA_LABEL}>
      <Label>{LABEL}</Label>

      <MenuList>
        {GROBAL_MENU_LIST.map((parent) => (
          <div key={parent.LABEL}>
            <MenuItem>
              <Link href={parent.URL}>
                <ChevronRightSvgWrapper>
                  <ChevronRightSvg height={12} width={12} />
                </ChevronRightSvgWrapper>
                {parent.LABEL}
              </Link>
            </MenuItem>

            {parent.LIST.map((children) => (
              <MenuItem isChild key={children.LABEL}>
                <Link href={children.URL}>
                  <ChevronRightSvgWrapper>
                    <ChevronRightSvg height={12} width={12} />
                  </ChevronRightSvgWrapper>
                  {children.LABEL}
                </Link>
              </MenuItem>
            ))}
          </div>
        ))}
      </MenuList>
    </Wrapper>
  )
}

export default Sidenav
