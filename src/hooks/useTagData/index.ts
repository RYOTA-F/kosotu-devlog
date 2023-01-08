import { useContext } from 'react'
/* Stores */
import { TagContext, TAG_ACTION_TYPES, initialTagState } from '@/stores/tag'
/* Types */
import { IUseTagData } from './types'
import { ITag } from '@/types/index'

const useTagData = (): IUseTagData => {
  const { state, dispatch } = useContext(TagContext)

  // タグ
  const tag = state.tag

  /* タグを更新 */
  const setTag = (tag: ITag) => {
    dispatch({ type: TAG_ACTION_TYPES.UPDATE_TAG, payload: tag })
  }

  /* タグをリセット */
  const resetTag = () => {
    dispatch({
      type: TAG_ACTION_TYPES.UPDATE_TAG,
      payload: initialTagState.tag,
    })
  }

  return { tag, setTag, resetTag }
}

export default useTagData
