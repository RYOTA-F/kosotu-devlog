import { useContext } from 'react'
/* Stores */
import { CommonContext, COMMON_ACTION_TYPES } from '@/stores/common'
/* Types */
import { IUseCommonData } from './types'
import { IBreadCrumb, ITableOfContents } from '@/types/index'
import { initialCommonState, IPaginationState } from '@/stores/common'

const useCommonData = (): IUseCommonData => {
  const { state, dispatch } = useContext(CommonContext)

  // パンくず
  const breadCrumb = state.breadClumb
  // 目次
  const tableOfContents = state.tableOfContents
  // ページネーション現在ページ数
  const currentPage = state.pagination.currentPage
  // ページネーション合計ページ数
  const totalPage = state.pagination.totalPage
  // ページネーションタイプ
  const paginationType = state.pagination.type

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

  /** ページネーションをセット */
  const setPagination = (pagination: IPaginationState) => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_PAGINATION,
      payload: pagination,
    })
  }

  /** ページネーションをリセット */
  const resetPagination = () => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_PAGINATION,
      payload: initialCommonState.pagination,
    })
  }

  return {
    breadCrumb,
    setBreadCrumb,
    resetBreadCrumb,
    tableOfContents,
    setTableOfContents,
    resetTableOfContents,
    currentPage,
    totalPage,
    paginationType,
    setPagination,
    resetPagination,
  }
}

export default useCommonData
