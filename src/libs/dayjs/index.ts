import dayjs from 'dayjs'

/**
 * 日付フォーマット
 */
export const formatDate = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD')
}
