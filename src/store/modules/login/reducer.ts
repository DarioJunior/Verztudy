/* eslint-disable indent */
import { Reducer } from 'redux'
import { ILoginState } from './types'
import { ADD_USER_INFOS } from './actions'

const INITIAL_STATE: ILoginState = {
  email: '',
  name: '',
  role: '',
}

const login: Reducer<ILoginState> = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_USER_INFOS: {
      return {
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}
export default login
