import Axios from 'axios'
import * as actionTypes from './actionType'

export const authStart = () => {
    return {
        type:actionTypes.AUTH_UP_START
    }
}

export const authSuccessful = (token,userId,email) => {
    return {
        type:actionTypes.AUTH_UP_SUCCESSFUL,
        token:token,
        userId:userId,
        email:email,
    }
}

export const authFailed = (error) => {
    return {
        type:actionTypes.AUTH_UP_FAILED,
        error:error
    }
}

export const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('email')
    localStorage.removeItem('expirationTime')
    return {
        type:actionTypes.LOG_OUT
    }
}

export const clearError = () => {
    return {
        type:actionTypes.CLEAR_ERROR
    }
}


const logOutTimer = (expTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        },expTime * 1000)
    }
}

export const auth = (email,password,isLogin) => dispatch => {
    dispatch(authStart())
    let url = process.env.REACT_APP_LOGIN_API

    if(!isLogin){
        url = process.env.REACT_APP_SIGNUP_API
    }

    Axios.post(url,{
        email:email,
        password:password,
        returnSecureToken:true 
    })
    .then(res => {
        let expirationTime = new Date(new Date().getTime() + (res.data.expiresIn *1000))
        localStorage.setItem('token',res.data.idToken)
        localStorage.setItem('userId',res.data.localId)
        localStorage.setItem('email',res.data.email)
        localStorage.setItem('expirationTime',expirationTime)
        dispatch(authSuccessful(res.data.idToken,res.data.localId,res.data.email))
        dispatch(logOutTimer(res.data.expiresIn))

    }).catch(err => {
        let errorText = ''
        switch(err.response.data.error.message){
            case 'EMAIL_EXISTS':
                errorText = 'The Email Address Already Exists. Please Try Again With Different Email.'
                break;

            case 'INVALID_EMAIL':
                errorText = 'The Provided Email is Invalid. Please Try Again With Different Email.'
                break;

            case 'INVALID_PASSWORD':
                errorText = 'The Provided Password is Wrong. Please Try Again.'
                break;

            case 'EMAIL_NOT_FOUND':
                errorText = 'No User Found With Provided Email. Please Check Again.'
                break;                

            default:errorText = err.response.data.error.message
        }
        dispatch(authFailed(errorText))
    })
}

export const autoLogin = () => dispatch => {
    let token = localStorage.getItem('token')
    let userId = localStorage.getItem('userId')
    let email = localStorage.getItem('email')
    if(token && userId && email){
        let getTime = new Date(localStorage.getItem('expirationTime'))
        let expTime = (getTime.getTime() - new Date().getTime()) / 1000
        if(expTime > 0){
            dispatch(authSuccessful(token,userId,email))
            dispatch(logOutTimer(expTime))
         } 
        else{
            dispatch(logOut())
        }
    }
}
