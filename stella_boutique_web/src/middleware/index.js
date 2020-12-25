import axios from 'axios'

const API_HOST = process.env.REACT_APP_HOST;

function getHeaders(token) {
    return ({
        'Content-Type': 'application/json',
        'Authorization': token
    })
}

function getBody(email, password) {
    return ({
        email: email,
        password: password
    })
}

const myMiddleware = store => next => action => {
    if(action.type === "LOGIN_USER") {
        const headers = getHeaders(action.token)
        const body = getBody(action.email, action.password)
        axios.post(API_HOST + '/login', body, {headers: headers})
        .then(response => {
            action.loginUser(action.email, action.password, store.dispatch)
        })
        .catch(err => {
            console.log(err)
            alert("User Authentication Failed!")
        })
    }
}

export default myMiddleware