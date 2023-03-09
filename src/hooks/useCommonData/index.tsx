import { useContext, useEffect } from 'react'
/* Stores */
import {
  CommonContext,
  COMMON_ACTION_TYPES,
  initialCommonState,
  IPaginationState,
  ISeoState,
} from '@/stores/common'
/* Types */
import { IBreadCrumb, IGlobalMenu, ITableOfContents } from '@/types/index'

const useCommonData = () => {
  const { state, dispatch } = useContext(CommonContext)

  // グローバルメニュー
  const globalMenu = state.globalMenu
  // パンくず
  const breadCrumb = state.breadClumb
  // 目次
  const tableOfContents = state.tableOfContents
  // ページネーション: 現在ページ数
  const currentPage = state.pagination.currentPage
  // ページネーション: 合計ページ数
  const totalPage = state.pagination.totalPage
  // SEO: タイトル
  const seoTitle = state.seo.title
  // SEO: 説明
  const seoDescription = state.seo.description
  // SEO: URL
  const seoUrl = state.seo.url
  // SEO: 画像
  const seoImage = state.seo.image
  // サイドナビゲーション開閉状態
  const isViewSidenav = state.isViewSidenav

  /** グローバルメニューをセット */
  const setGlobalMenu = (globalMenu: IGlobalMenu[]) => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_GLOBAL_MENU,
      payload: globalMenu,
    })
  }

  /** グローバルメニューをリセット */
  const resetGlobalMenu = () => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_GLOBAL_MENU,
      payload: [],
    })
  }

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

  /**
   * サイドナビゲーターの開閉状態を変更
   */
  const onChangeIsViewSidenav = () => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_IS_VIEW_SIDENAV,
      payload: !isViewSidenav,
    })
  }

  /**
   * サイドナビゲーターの開閉状態を変更
   */
  const onCloseIsViewSidenav = () => {
    dispatch({
      type: COMMON_ACTION_TYPES.UPDATE_IS_VIEW_SIDENAV,
      payload: false,
    })
  }

  useEffect(() => {
    return () => {
      onCloseIsViewSidenav()
    }
  }, [])

  return {
    globalMenu,
    setGlobalMenu,
    resetGlobalMenu,
    breadCrumb,
    setBreadCrumb,
    resetBreadCrumb,
    tableOfContents,
    setTableOfContents,
    resetTableOfContents,
    currentPage,
    totalPage,
    setPagination,
    resetPagination,
    seoTitle,
    seoDescription,
    seoUrl,
    seoImage,
    setSeo,
    resetSeo,
    isViewSidenav,
    onChangeIsViewSidenav,
    onCloseIsViewSidenav,
  }
}

export default useCommonData
