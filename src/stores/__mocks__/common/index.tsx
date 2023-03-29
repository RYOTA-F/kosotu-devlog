import { FC } from 'react'
import { CommonContext, initialCommonState } from '@/stores/common'
import {
  tableOfContentsStateMock,
  paginationStateMock,
  breadCrumbStateMock,
  crobalMenuStateMock,
} from './mock'
import { IContextProvider } from '../../types'

const CommonContextProviderMock: FC<
  IContextProvider & { isViewSideNav?: boolean }
> = ({ children, isViewSideNav }) => {
  return (
    <CommonContext.Provider
      value={{
        state: {
          ...initialCommonState,
          tableOfContents: tableOfContentsStateMock,
          pagination: paginationStateMock,
          breadClumb: breadCrumbStateMock,
          globalMenu: crobalMenuStateMock,
          isViewSidenav: isViewSideNav ? isViewSideNav : false,
        },
        dispatch: () => null,
      }}
    >
      {children}
    </CommonContext.Provider>
  )
}

export default CommonContextProviderMock
