import { IClassesState } from './types'

export const ADD_CLASSES = 'ADD_CLASSES'

export function addClasses(classes: IClassesState) {
  return {
    type: ADD_CLASSES,
    payload: {
      classes
    }
  }
}
