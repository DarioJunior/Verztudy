import { IModulesState } from './types'

export const ADD_MODULES = 'ADD_MODULES'

export function addModules(modules: IModulesState) {
  return {
    type: ADD_MODULES,
    payload: {
      modules
    }
  }
}
