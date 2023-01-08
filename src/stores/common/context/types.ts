import { Dispatch } from 'react'
import { TCommonActions } from '../action'
import { ICommonState } from '../state'

export interface ICommonContext {
  state: ICommonState
  dispatch: Dispatch<TCommonActions>
}
