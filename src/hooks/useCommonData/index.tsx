import { useContext } from 'react'
/* Stores */
import {
  CommonContext,
  COMMON_ACTION_TYPES,
  initialCommonState,
  IPaginationState,
  ISeoState,
} from '@/stores/common'
/* Types */
import { IBreadCrumb, ITableOfContents } from '@/types/index'

const useCommonData = () => {
  const { state, dispatch } = useContext(CommonContext)

  // パンくず
  const breadCrumb = state.breadClumb
  // 目次
  const tableOfContents = state.tableOfContents
  // ページネーション: 現在ページ数
  const currentPage = state.pagination.currentPage
  // ページネーション: 合計ページ数
  const totalPage = state.pagination.totalPage
  // ページネーション: タイプ
  const paginationType = state.pagination.type
  // SEO: タイトル
  const seoTitle = state.seo.title
  // SEO: 説明
  const seoDescription = state.seo.description
  // SEO: URL
  const seoUrl = state.seo.url
  // SEO: 画像
  const seoImage = state.seo.image

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

  /** SEOをセット */
  const setSeo = (seo: ISeoState) => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_SEO,
      payload: seo,
    })
  }

  /** SEOをリセット */
  const resetSeo = () => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_SEO,
      payload: initialCommonState.seo,
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
    seoTitle,
    seoDescription,
    seoUrl,
    seoImage,
    setSeo,
    resetSeo,
  }
}

export default useCommonData
