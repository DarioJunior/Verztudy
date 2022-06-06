import { createStore } from 'redux'
import { IClassesState } from './modules/classes/types'
import { ILoginState } from './modules/login/types'
import { IModulesState } from './modules/modules/types'
import rootReducer from './modules/rootReducer'

export interface IState {
  login: ILoginState
  modules: IModulesState
  classes: IClassesState
}

const store = createStore(rootReducer)

export default store
