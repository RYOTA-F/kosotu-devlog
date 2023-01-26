import { MicroCmsUsecaseBlogDev } from './development'
import { MicroCmsUsecaseBlogProd } from './production'
import type { IMicroCmsUsecaseBlog } from './types'
/* Utils */
import { IS_DEVELOPMENT } from '@/utils/index'

/**
 * 投稿・関連取得クラス
 */
export class MicroCmsUsecaseBlog implements IMicroCmsUsecaseBlog {
  private readonly instanse: IMicroCmsUsecaseBlog

  constructor() {
    this.instanse = IS_DEVELOPMENT
      ? new MicroCmsUsecaseBlogDev()
      : new MicroCmsUsecaseBlogProd()
  }

  getBlogByID: IMicroCmsUsecaseBlog['getBlogByID'] = async (id) =>
    this.instanse.getBlogByID(id)
}

export * from './types'
