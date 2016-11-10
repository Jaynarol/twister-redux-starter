import { AUTH_LOGIN_SUCCESS } from './types'

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
        header: {
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
        .then((authInfo) => dispatch(loginSuccess(...authInfo)))
        .catch((err) => console.error(err))

}

export {login}