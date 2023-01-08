import { Dispatch } from 'react'
import { TTagActions } from '../action'
import { ITagState } from '../state'

export interface ITagContext {
  state: ITagState
  dispatch: Dispatch<TTagActions>
}
