import {AUTH_LOGIN_SUCCESS, AUTH_REGISTER_SUCCESS} from './types'
import {push} from "redux-router";

const loginSuccess = (username, name, token) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: {
        username,
        name,
        token,
    },
})


const login = (username, password) => (dispatch) =>{

    const uri = 'http://192.168.31.166:3000/api/TwisterUsers/login'
    const header = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        })
    }

    fetch(uri, header)
        .then((response)=>{
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response.json()
        })
        .then((authInfo) => dispatch(loginSuccess(authInfo.username, authInfo.password, authInfo.token)))
        .catch((err) => console.error(err))

}


const register = (username, name, email, password) => (dispatch) => {

    const uri = 'http://192.168.31.166:3000/api/TwisterUsers'
    const header = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            username, name, email, password
        })
    }

    fetch(uri, header)
        .then((response)=>{
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response.json()
        })
        .then(() => dispatch(push('/login')))
        .catch((err) => console.error(err))

}


export {login, register}