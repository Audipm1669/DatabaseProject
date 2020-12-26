import axios from 'axios'

const API_HOST = process.env.REACT_APP_HOST;

function getHeaders(token) {
    return ({
        'Content-Type': 'application/json',
        'Authorization': token
    })
}

function getBody(username, password) {
    return ({
        username: username,
        password: password
    })
}

function registerData(username, password, fullname, birthday, address, phoneNumber, email) {
    return({
        username: username,
        password: password,
        fullname: fullname,
        birthday: birthday,
        address: address,
        phoneNumber: phoneNumber,
        email: email
    })
}

const myMiddleware = store => next => action => {
    if(action.type === "LOGIN_USER") {
        const headers = getHeaders(action.token)
        const body = getBody(action.username, action.password)
        axios.post(API_HOST + '/login', body, {headers: headers})
        .then(response => {
            action.loginUser(action.username, action.password, store.dispatch)
        })
        .catch(err => {
            console.log(err)
            alert("User Authentication Failed!")
        })
    } else if(action.type === "REGISTER_USER") {
        const headers = getHeaders(action.token)
        const body = registerData(
            action.username, 
            action.password, 
            action.fullname, 
            action.birthday, 
            action.address, 
            action.phoneNumber, 
            action.email
            )
        axios.post(API_HOST + '/register', body, {headers: headers})
        .then(response => {
            action.registerUser(
                action.username,
                action.password,
                action.fullname, 
                action.birthday, 
                action.address, 
                action.phoneNumber, 
                action.email,
                store.dispatch
                )
        })
        .catch(err => {
            console.log(err)
            alert("User Register Failed!")
        })
    } 


}

export default myMiddleware