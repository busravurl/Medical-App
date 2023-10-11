import axios from "axios"
import { UPDATE_FCM_TOKEN, UPDATE_TOKEN , LOGIN_SUCCESS, LOGOUT} from "../actionTypes"

const updateToken = (token)=>{
    return {
        type: UPDATE_TOKEN,
        payload:token
    }
}

const updateFcmToken = (fct)=>{
    return {
        type: UPDATE_FCM_TOKEN,
        payload:fct
    }
}



export {updateToken, updateFcmToken}

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user ,
});

export const logout = () => ({
  type: LOGOUT,
});