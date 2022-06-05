import { combineReducers } from 'redux'
import login from './login/reducer'
import modules from './modules/reducer'

export default combineReducers({
  login,
  modules
})
