import { Dispatch } from 'react'
import { TBlogActions } from '../action'
import { IBlogState } from '../state'

export interface IBlogContext {
  state: IBlogState
  dispatch: Dispatch<TBlogActions>
}
