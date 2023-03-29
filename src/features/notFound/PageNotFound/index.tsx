import { FC } from 'react'
import Image from 'next/image'
/* Const */
import { PAGE_NOT_FOUND, ARIA_LABEL } from './const'

const PageNotFound: FC = () => {
  return (
    <section
      className="text-gray-text-t3 text-center"
      aria-label={ARIA_LABEL.PAGE_NOT_FOUND}
    >
      <Image
        src={PAGE_NOT_FOUND.IMAGE.SRC}
        alt={PAGE_NOT_FOUND.IMAGE.ALT}
        width={PAGE_NOT_FOUND.IMAGE.WIDTH}
        height={PAGE_NOT_FOUND.IMAGE.HEIGHT}
        className="mx-auto"
      />
      <h1 className="mt-5 text-2xl font-bold">{PAGE_NOT_FOUND.TITLE}</h1>
      <p className="mt-10 text-base whitespace-pre-wrap">
        {PAGE_NOT_FOUND.MESSAGE}
      </p>
    </section>
  )
}

export default PageNotFound
export * from './const'
