import { MicroCmsUsecaseTagDev } from './development'
import { MicroCmsUsecaseTagProd } from './production'
import type { IMicroCmsUsecaseTag } from './types'
/* Utils */
import { IS_DEVELOPMENT } from '@/utils/index'

/**
 * タグ・取得クラス
 */
export class MicroCmsUsecaseTag implements IMicroCmsUsecaseTag {
  private readonly instance: IMicroCmsUsecaseTag

  constructor() {
    this.instance = IS_DEVELOPMENT
      ? new MicroCmsUsecaseTagDev()
      : new MicroCmsUsecaseTagProd()
  }

  getTags: IMicroCmsUsecaseTag['getTags'] = async () => this.instance.getTags()
  getTagById: IMicroCmsUsecaseTag['getTagById'] = async (params) =>
    this.instance.getTagById(params)
}
