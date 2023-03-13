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

const DynamicImage: FC<IDynamicImage> = ({ src, alt, width, height }) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} width={width} height={height} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1.76;
`

export default DynamicImage
