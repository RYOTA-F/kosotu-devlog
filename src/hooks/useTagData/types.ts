import { ITag } from '@/types/index'

export interface IUseTagData {
  tag: ITag
  setTag: (tag: ITag) => void
  resetTag: () => void
}
