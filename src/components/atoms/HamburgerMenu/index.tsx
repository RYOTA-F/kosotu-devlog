import { FC } from 'react'
/* Styles */
import { Wrapper, Container, Border } from './index.styles'

export const ARIA_LABEL = 'hamburgerMenu' as const

const spanList = [...new Array(3)].map((_, i) => i)

const HamburgerMenu: FC = () => {
  return (
    <Wrapper aria-label={ARIA_LABEL}>
      <Container>
        {spanList.map((v) => (
          <Border key={v} />
        ))}
      </Container>
    </Wrapper>
  )
}

export default HamburgerMenu
