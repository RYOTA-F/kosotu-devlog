import { MicroCmsUsecaseCategoryDev } from './development'
import { MicroCmsUsecaseCategoryProd } from './production'
import type { IMicroCmsUsecaseCategory } from './types'
/* Utils */
import { IS_DEVELOPMENT } from '@/utils/index'

/**
 * カテゴリ・取得クラス
 */
export class MicroCmsUsecaseCategory implements IMicroCmsUsecaseCategory {
  private readonly instance: IMicroCmsUsecaseCategory

  constructor() {
    this.instance = IS_DEVELOPMENT
      ? new MicroCmsUsecaseCategoryDev()
      : new MicroCmsUsecaseCategoryProd()
  }

  getCategories: IMicroCmsUsecaseCategory['getCategories'] = async () =>
    this.instance.getCategories()
  getCategoryById: IMicroCmsUsecaseCategory['getCategoryById'] = async (
    params
  ) => this.instance.getCategoryById(params)
}
