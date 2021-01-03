export function loginUser(username, password, userID) {
    return {
        type: "LOGIN_USER",
        username: username,
        password: password,
        userID: userID,
        setUser:(username, userID, dispatch) => dispatch(setUser(username, userID)),
    }
}

export function setUser(username, userID) {
    return {
        type: "SET_USER",
        username: username,
        userID: userID
    }
}

export function registerUser(username, password, fullname, birthday, address, phoneNumber, email) {
    return {
        type: "REGISTER_USER",
        username: username,
        password: password,
        fullname: fullname,
        birthday: birthday,
        address: address,
        phoneNumber: phoneNumber,
        email: email
    }
}

export function enterWeb(){
    return {
        type: "ENTER_WEB",
        setProductList:(productList, dispatch) => dispatch(setProductList(productList))
    }
}

export function setProductList(productList) {
    return {
        type: "SET_PRODUCT_LIST",
        productList: productList
    }
}

export function checkoutOrder(orderList){
    return{
        type: "ADD_ORDER",
        orderList: orderList
    }
}