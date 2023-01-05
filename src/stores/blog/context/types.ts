import { Dispatch } from 'react'
import { IBlogState } from '../state'
import { TBlogActions } from '../action'

export interface IBlogContext {
  state: IBlogState
  dispatch: Dispatch<TBlogActions>
}
