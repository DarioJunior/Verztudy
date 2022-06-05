/* eslint-disable indent */
import { Reducer } from 'redux'
import { IModulesState } from './types'
import { ADD_MODULES } from './actions'

const INITIAL_STATE: IModulesState = {
  modules: []
}

const modules: Reducer<IModulesState> = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_MODULES: {
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
export default modules
