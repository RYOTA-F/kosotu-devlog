import { FC, useState } from 'react'
import Image from 'next/image'

type OnLoadingCompleteResult = { naturalHeight: number; naturalWidth: number }

export interface IDynamicImage {
  src: string
  alt: string
  width: number
  height: number
  loadingImageAspectRatio?: number
}

const DynamicImage: FC<IDynamicImage> = ({
  src,
  alt,
  width,
  height,
  loadingImageAspectRatio = 1.78,
}) => {
  const [aspectRatio, setAspectRatio] = useState(0)

  /**
   * ローディング完了処理
   */
  const onLoadingComplete = (e: OnLoadingCompleteResult) => {
    setAspectRatio(e.naturalWidth / e.naturalHeight)
  }

  return (
    <div
      style={{
        aspectRatio: `${aspectRatio || loadingImageAspectRatio}`,
        position: 'relative',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL="/images/loading.webp"
        onLoadingComplete={(e) => onLoadingComplete(e)}
      />
    </div>
  )
}

export default DynamicImage
