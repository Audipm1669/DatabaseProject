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
            localStorage.setItem("username", action.username);
            localStorage.setItem("cart",JSON.stringify([0]));
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
            console.log("middleware " + response.data.productList)
        })
        .catch(err => {
            console.log(err)
            alert("Entering Web Failed!")
        });
    } else if(action.type === "ADD_ORDER"){
        const headers = getHeaders(action.token);
        const body = {
            orderList: action.orderList
        }
        console.log("middleware add order");
        console.log(body.orderList);
        axios.post(API_HOST + '/user/create/order', body, {headers: headers})
        .then(response => {
            // action.setProductList(response.data.productList,store.dispatch);
            console.log("middleware " + action.orderList)
        })
        .catch(err => {
            console.log(err)
            alert("Creating Order Failed!")
        });
    } else {
        return next(action)
    }


}

export default myMiddleware