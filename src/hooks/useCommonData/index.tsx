import { useContext } from 'react'
/* Stores */
import { CommonContext, COMMON_ACTION_TYPES } from '@/stores/common'
/* Types */
import { IBreadCrumb } from '@/types/index'

const useCommonData = () => {
  const { state, dispatch } = useContext(CommonContext)

  // パンくず
  const breadCrumb = state.breadClumb

  /** パンくずをセット */
  const setBreadCrumb = (breadCrumb: IBreadCrumb) => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_BREAD_CRUMB,
      payload: breadCrumb,
    })
  }

  /** パンくずをリセット */
  const resetBreadCrumb = () => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_BREAD_CRUMB,
      payload: undefined,
    })
  }

  return {
    breadCrumb,
    setBreadCrumb,
    resetBreadCrumb,
  }
}

export default useCommonData
