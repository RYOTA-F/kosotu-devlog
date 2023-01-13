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
  // 現在のページ数
  const currentPage = state.pagination.currentPage
  // 合計のページ数
  const totalPage = state.pagination.totalPage

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

  /** 現在のページ数をセット */
  const setCurrentPage = (currentPage: number) => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_CURRENT_PAGE,
      payload: currentPage,
    })
  }

  /** 合計のページ数をセット */
  const setTotalPage = (totalPage: number) => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_TOTAL_PAGE,
      payload: totalPage,
    })
  }

  /** 現在のページ数をリセット */
  const resetPagination = () => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_CURRENT_PAGE,
      payload: 0,
    })
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_TOTAL_PAGE,
      payload: 0,
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
    setCurrentPage,
    totalPage,
    setTotalPage,
    resetPagination,
  }
}

export default useCommonData
