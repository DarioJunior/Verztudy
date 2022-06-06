import { combineReducers } from 'redux'
import classes from './classes/reducer'
import login from './login/reducer'
import modules from './modules/reducer'

export default combineReducers({
  login,
  modules,
  classes
})
