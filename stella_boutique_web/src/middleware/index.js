import axios from 'axios';
import { useDispatch } from 'react-redux';

// const API_HOST = process.env.REACT_APP_HOST;
const API_HOST = "http://localhost:8080/api";

// const dispatch = useDispatch();

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
        const headers = getHeaders(action.token);
        const body = getBody(action.username, action.password);
        console.log(body);
        axios.post(API_HOST + '/guest/Login', body, {headers: headers})
        .then(response => {
            action.userID =  response.data.userID;
            action.setUser(action.username,response.data.userID,store.dispatch);
            action.setNewArrival(action.productList,)
            localStorage.setItem("username", action.username);
            console.log("middleware " + response.data.userID)
            if(response.data.userID!=0 || response.data.userID!= null ){
                localStorage.setItem("userID", response.data.userID);
            }else{  
                alert("Invalid username or password")
            }
        })
        .catch(err => {
            console.log(err)
            alert("User Authentication Failed!")
        });
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
    } else if(action.type === "ENTER_WEB"){
        const headers = getHeaders(action.token);
        const body = {
            productList: action.productList
        }
        console.log("getting product");
        axios.get(API_HOST + '/guest/product', body, {headers: headers})
        .then(response => {
            action.setProductList(response.data.productList,store.dispatch);
            response.data.productList.map((item,key) => {
                console.log("key "+ key)
                console.log("id "+ item.itemID)
                console.log(item.name)
                console.log(item.quantity)
                console.log(item.category)
                console.log(item.size)
                console.log(item.price)
                console.log(item.description)
                console.log(item.pictureURL)
            })
            console.log("middleware " + response.data.productList)
        })
        .catch(err => {
            console.log(err)
            alert("Entering Web Failed!")
        });
    } else {
        return next(action)
    }


}

export default myMiddleware