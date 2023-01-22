import { FC } from 'react'
import { CommonContext, initialCommonState } from '@/stores/common'
import {
  tableOfContentsStateMock,
  paginationStateMock,
  breadCrumbStateMock,
} from './mock'
import { IContextProvider } from '../../types'

const CommonContextProviderMock: FC<IContextProvider> = ({ children }) => {
  return (
    <CommonContext.Provider
      value={{
        state: {
          ...initialCommonState,
          tableOfContents: tableOfContentsStateMock,
          pagination: paginationStateMock,
          breadClumb: breadCrumbStateMock,
        },
        dispatch: () => null,
      }}
    >
      {children}
    </CommonContext.Provider>
  )
}

export default CommonContextProviderMock
