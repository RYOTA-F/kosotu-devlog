import type { GetStaticProps } from 'next'
/* Logic */
import { MicroCmsUsecaseCategory } from '@/logic/usecase/microCMS/category'

/**
 * 静的ページ用のグローバル情報を取得
 */
export const getStaticProps: GetStaticProps = async () => {
  const microCmsUsecaseCategory = new MicroCmsUsecaseCategory()

  // グローバルメニュー取得
  const globalMenu = await microCmsUsecaseCategory.getGlobalMenu()

  return {
    props: {
      globalMenu,
    },
  }
}
