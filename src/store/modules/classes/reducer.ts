/* eslint-disable indent */
import { Reducer } from 'redux'
import { IClassesState } from './types'
import { ADD_CLASSES } from './actions'

const INITIAL_STATE: IClassesState = {
  classes: []
}

const classes: Reducer<IClassesState> = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_CLASSES: {
      return {
        state,
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}
export default classes
