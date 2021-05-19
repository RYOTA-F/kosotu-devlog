/**
 * 日付変換ロジック
 * @package logic
 */
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

// 日本語化
dayjs.locale(`ja`)

/**
 * 日付フォーマット変換(YYYY年M月D日)
 * @param date
 * @returns
 */
export const showDateTime = (date: string) => {
  return dayjs(date).format('YYYY年M月D日')
}
