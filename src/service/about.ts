/**
 * ブログ詳細API
 * @package service
 */
/* constants */
import { initAboutData } from '@/constants/initState'
/* config */
import globalAxios from '@/config/globalAxios'
/* types */
import { AboutType } from '@/types/about'

const BASE_URL = `${process.env.BASE_END_POINT}about/`

/**
 * ブログ詳細データ取得
 * @returns aboutData
 */
export const getAbout = async () => {
  let aboutData: AboutType = initAboutData

  try {
    const res = await globalAxios.get(BASE_URL)

    aboutData = res.data
  } catch (error) {
    throw new Error(`API ERROR: getProfile`)
  }

  return aboutData
}
