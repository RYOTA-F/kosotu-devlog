import { useContext } from 'react'
/* Stores */
import { CommonContext, COMMON_ACTION_TYPES } from '@/stores/common'
/* Types */
import { IUseCommonData } from './types'
import { IBreadCrumb, ITableOfContents } from '@/types/index'

const useCommonData = (): IUseCommonData => {
  const { state, dispatch } = useContext(CommonContext)

  // パンくず
  const breadCrumb = state.breadClumb
  // 目次
  const tableOfContents = state.tableOfContents

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

  /** 目次をセット */
  const setTableOfContents = (tableOfContents: ITableOfContents[]) => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS,
      payload: tableOfContents,
    })
  }

  /** 目次をリセット */
  const resetTableOfContents = () => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_TABLE_OF_CONTENTS,
      payload: [],
    })
  }

  return {
    breadCrumb,
    setBreadCrumb,
    resetBreadCrumb,
    tableOfContents,
    setTableOfContents,
    resetTableOfContents,
  }
}

export default useCommonData
