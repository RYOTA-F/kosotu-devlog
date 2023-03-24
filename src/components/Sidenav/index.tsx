import { FC } from 'react'
import Link from 'next/link'
/* Components */
import { ChevronRightSvg } from '@/components/Elements/Svg'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Styles */
import {
  Wrapper,
  Container,
  Label,
  MenuList,
  MenuItem,
  ChevronRightSvgWrapper,
} from './index.styles'

export const ARIA_LABEL = 'sidenav' as const
export const LABEL = 'MENU' as const

const Sidenav: FC = () => {
  const { globalMenu, isViewSidenav } = useCommonData()

  return (
    <Wrapper isView={isViewSidenav} aria-label={ARIA_LABEL}>
      <Container>
        <Label>{LABEL}</Label>
        <MenuList>
          {globalMenu.map((parent) => (
            <div key={parent.label}>
              <MenuItem>
                <Link href={parent.url}>
                  <ChevronRightSvgWrapper>
                    <ChevronRightSvg height={12} width={12} />
                  </ChevronRightSvgWrapper>
                  {parent.label}
                </Link>
              </MenuItem>

              {parent.children.map((children) => (
                <MenuItem isChild key={children.label}>
                  <Link href={children.url}>
                    <ChevronRightSvgWrapper>
                      <ChevronRightSvg height={12} width={12} />
                    </ChevronRightSvgWrapper>
                    {children.label}
                  </Link>
                </MenuItem>
              ))}
            </div>
          ))}
        </MenuList>
      </Container>
    </Wrapper>
  )
}

export default Sidenav
