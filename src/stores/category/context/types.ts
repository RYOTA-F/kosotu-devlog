import { Dispatch } from 'react'
import { TCategoryActions } from '../action'
import { ICategoryState } from '../state'

export interface ICategoryContext {
  state: ICategoryState
  dispatch: Dispatch<TCategoryActions>
}
