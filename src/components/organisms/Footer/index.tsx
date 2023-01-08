import { FC } from 'react'
import Link from 'next/link'
/* Const */
import { SUB_MENU_LIST } from '@/const/index'
import { FOOTER, ARIA_LABEL } from './const'
/* Styles */
import {
  FooterWrapper,
  MenuList,
  MenuItem,
  MenuLabel,
  CopyContainer,
  CopyMark,
  CopyText,
} from './index.styles'

const Footer: FC = () => {
  return (
    <FooterWrapper aria-label={ARIA_LABEL.FOOTER}>
      <MenuList>
        {SUB_MENU_LIST.map((v) => (
          <MenuItem key={v.URL}>
            <Link href={v.URL}>
              <MenuLabel>{v.LABEL}</MenuLabel>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
      <CopyContainer>
        <CopyMark>{FOOTER.COPY_MARK}</CopyMark>
        <CopyText>{FOOTER.COPY_TEXT}</CopyText>
      </CopyContainer>
    </FooterWrapper>
  )
}

export default Footer
export * from './const'
