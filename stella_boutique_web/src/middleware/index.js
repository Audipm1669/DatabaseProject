import axios from 'axios'

// const API_HOST = process.env.REACT_APP_HOST;
const API_HOST = "http://localhost:8080/api"

function getHeaders(token) {
    return ({
        'Content-Type': 'application/json',
        'Authorization': token
    })
}

function getBody(username, password,userID) {
    return ({
        username: username,
        password: password,
        userID: userID
    })
}

function registerData(username, password, fullname, birthday, address, phoneNumber, email,userID) {
    return({
        username: username,
        password: password,
        fullname: fullname,
        birthday: birthday,
        address: address,
        phoneNumber: phoneNumber,
        email: email,
        userID: userID
    })
}

const myMiddleware = store => next => action => {
    if(action.type === "LOGIN_USER") {
        const headers = getHeaders(action.token)
        const body = getBody(action.username, action.password)
        console.log(body)
        axios.post(API_HOST + '/guest/Login', body, {headers: headers})
        .then(response => {
            console.log(action.username, action.password, response.data.userID)
            action.loginUser(action.username, action.password, response.data.userID, store.dispatch)
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
        console.log(body)
        axios.post(API_HOST + '/Register', body, {headers: headers})
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