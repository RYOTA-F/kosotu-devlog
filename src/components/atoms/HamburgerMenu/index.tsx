import { FC } from 'react'
/* Hooks */
import useCommonData from '@/hooks/useCommonData'
/* Styles */
import { Wrapper, Container, Border } from './index.styles'

export const ARIA_LABEL = 'hamburgerMenu' as const

const spanList = [...new Array(3)].map((_, i) => i)

const HamburgerMenu: FC = () => {
  const { isViewSidenav, onChangeIsViewSidenav } = useCommonData()

  return (
    <Wrapper onClick={onChangeIsViewSidenav} aria-label={ARIA_LABEL}>
      <Container>
        {spanList.map((v) => (
          <Border key={v} isView={isViewSidenav} />
        ))}
      </Container>
    </Wrapper>
  )
}

export default HamburgerMenu
