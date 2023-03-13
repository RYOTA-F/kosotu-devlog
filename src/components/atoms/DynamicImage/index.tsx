import { FC } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'

export interface IDynamicImage {
  src: string
  alt: string
  width: number
  height: number
  loadingImageAspectRatio?: number
}

const DynamicImage: FC<IDynamicImage> = ({ src, alt }) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} loading="lazy" fill />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1.76 / 1;
`

export default DynamicImage
