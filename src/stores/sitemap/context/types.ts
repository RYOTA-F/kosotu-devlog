import { Dispatch } from 'react'
import { ISitemapActions } from '../action'
import { ISitemapState } from '../state'

export interface ISitemapContext {
  state: ISitemapState
  dispatch: Dispatch<ISitemapActions>
}
