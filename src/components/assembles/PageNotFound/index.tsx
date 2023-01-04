import { FC } from 'react'
import Image from 'next/image'
/* Const */
import { PAGE_NOT_FOUND, ARIA_LABEL } from './const'
/* Styles */
import { PageNotFoundWrapper, Title, Message } from './index.styles'

const PageNotFound: FC = () => {
  return (
    <PageNotFoundWrapper aria-label={ARIA_LABEL.PAGE_NOT_FOUND}>
      <Image
        src={PAGE_NOT_FOUND.IMAGE.SRC}
        alt={PAGE_NOT_FOUND.IMAGE.ALT}
        width={PAGE_NOT_FOUND.IMAGE.WIDTH}
        height={PAGE_NOT_FOUND.IMAGE.HEIGHT}
      />
      <Title>{PAGE_NOT_FOUND.TITLE}</Title>
      <Message>{PAGE_NOT_FOUND.MESSAGE}</Message>
    </PageNotFoundWrapper>
  )
}

export default PageNotFound
export * from './const'
