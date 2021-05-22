/**
 * プロフィールAPI
 * @package service
 */
/* constants */
import { initProfileData } from '@/constants/initState'
/* config */
import globalAxios from '@/config/globalAxios'
/* types */
import { ProfileType } from '@/types/profile'

const BASE_URL = `${process.env.BASE_END_POINT}profile/`

/**
 * プロフィールデータ取得
 * @returns profileData
 */
export const getProfile = async () => {
  let profileData: ProfileType = initProfileData

  try {
    const res = await globalAxios.get(BASE_URL)

    profileData = res.data
  } catch (error) {
    throw new Error(`API ERROR: getProfile`)
  }

  return profileData
}
