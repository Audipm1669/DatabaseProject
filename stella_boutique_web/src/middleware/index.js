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
        // console.log(body);
        axios.post(API_HOST + '/guest/Login', body, {headers: headers})
        .then(response => {
            action.userID =  response.data.userID;
            action.setUser(action.username,response.data.userID,store.dispatch);
            if(response.data.userID!=0 && response.data.userID!= null ){
                localStorage.setItem("username", action.username);
                localStorage.setItem("userID", response.data.userID);            
                localStorage.setItem("cart",JSON.stringify([0]));            
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
        // console.log(body)
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
            // console.log("middleware " + response.data.productList)
        })
        .catch(err => {
            console.log(err)
            alert("Entering Web Failed!")
        });
    } else if(action.type === "ADD_ORDER"){
        const headers = getHeaders(action.token);
        const body = {
            itemList: action.orderList,
            userID : localStorage.getItem("userID")
        }
        console.log("middleware add order");
        axios.post(API_HOST + '/user/create/order', body, {headers: headers})
        .then(response => {
            console.log("middleware " + body.itemList)
            console.log("middleware " + body.userID)
        })
        .catch(err => {
            console.log(err)
            alert("Creating Order Failed!")
        });
    }  else if(action.type === "GET_ORDER_LIST"){
        const headers = getHeaders(action.token);
        const body = {
            userID: action.userID
        }
        console.log("getting order history");
        axios.post(API_HOST + '/user/history', body, {headers: headers})
        .then(response => {
            action.setOrderList(response.data.orderList,store.dispatch);
            console.log(response.data.orderList);
        })
        .catch(err => {
            console.log(err)
            alert("Getting User Profile Failed!")
        });
    }else if(action.type === "ADD_LIKE_ITEM"){
        const headers = getHeaders(action.token);
        const body = {
            userID : action.userID,
            itemID : action.itemID
        }
        console.log("middleware add like");
        console.log(body);
        axios.post(API_HOST + '/user/add/like', body, {headers: headers})
        .then(response => {
            console.log("middleware " + body.itemList)
            console.log("middleware " + body.userID)
            alert(`已加入到您的喜歡商品中！`);
        })
        .catch(err => {
            console.log(err)
            alert("Like Failed!")
        });
    }else if(action.type === "REMOVE_LIKE_ITEM"){
        const headers = getHeaders(action.token);
        const body = {
            userID : action.userID,
            itemID : action.itemID
        }
        console.log("middleware remove like");
        console.log(body);
        axios.post(API_HOST + '/user/remove/like', body, {headers: headers})
        .then(response => {
            console.log("middleware " + body.itemList)
            console.log("middleware " + body.userID)
        })
        .catch(err => {
            console.log(err)
            alert("Unlike Failed!")
        });
    }else if(action.type === "GET_LIKE_ITEM"){
        const headers = getHeaders(action.token);
        const body = {
            itemList: action.orderList,
            userID : localStorage.getItem("userID")
        }
        console.log("middleware add order");
        axios.post(API_HOST + '/user/create/order', body, {headers: headers})
        .then(response => {
            console.log("middleware " + body.itemList)
            console.log("middleware " + body.userID)
        })
        .catch(err => {
            console.log(err)
            alert("Creating Order Failed!")
        });
    }else {
        return next(action)
    }


}

export default myMiddleware