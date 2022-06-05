import { ILoginState } from './types'

export const ADD_USER_INFOS = 'ADD_USER_INFOS'

export function addUserInfos(userInfo: ILoginState) {
  return {
    type: ADD_USER_INFOS,
    payload: {
      userInfo
    }
  }
}
