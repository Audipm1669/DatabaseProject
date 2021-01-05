export function loginUser(username, password, userID) {
    return {
        type: "LOGIN_USER",
        username: username,
        password: password,
        userID: userID,
        setUser:(username, userID, dispatch) => dispatch(setUser(username, userID)),
        setLikeItemList:(userOrderList, dispatch) => dispatch(setLikeItemList(userOrderList)),
        setOrderList:(userOrderList, dispatch) => dispatch(setOrderList(userOrderList))
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
export function getOrderList(userID){
    return {
        type: "GET_ORDER_LIST",
        userID: userID,
        setOrderList:(userOrderList, dispatch) => dispatch(setOrderList(userOrderList))
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

export function setOrderList(userOrderList){
    return{
        type: "SET_ORDER_LIST",
        userOrderList: userOrderList
    }
}

export function addLikeItem(userID , itemID){
    return{
        type: "ADD_LIKE_ITEM",
        userID: userID,
        itemID: itemID
    }
}

export function removeLikeItem(userID , itemID){
    return{
        type: "REMOVE_LIKE_ITEM",
        userID: userID,
        itemID: itemID
    }
}

export function getLikeItemList(userID ){
    return{
        type: "GET_LIKE_ITEM",
        userID: userID,        
        setLikeItemList:(userMyLike, dispatch) => dispatch(setLikeItemList(userMyLike))
    }
}
export function setLikeItemList(userMyLike){
    return{
        type: "SET_MY_LIKE_LIST",
        userMyLike: userMyLike
    }
}
export function enterAdmin(){
    return{
        type: "ENTER_ADMIN",    
        setSellerUserList:(sellerUser, dispatch) => dispatch(setSellerUserList(sellerUser)),
        setSellerProductList:(sellerProduct, dispatch) => dispatch(setSellerProductList(sellerProduct)),
        setSellerOrderList:(sellerOrder, dispatch) => dispatch(setSellerOrderList(sellerOrder))
    }
}
export function setSellerUserList(sellerUser){
    return{
        type: "SET_SELLER_USER",
        sellerUser: sellerUser
    }
}
export function setSellerProductList(sellerProduct){
    return{
        type: "SET_SELLER_PRODUCT",
        sellerProduct: sellerProduct
    }
}
export function setSellerOrderList(sellerOrder){
    return{
        type: "SET_SELLER_ORDER",
        sellerOrder: sellerOrder
    }
}
export function updateStatus(orderID , status){
    return{
        type: "UPDATE_STATUS",
        orderID: orderID,
        status: status
    }
}
export function loadOrderList(){
    return{
        type: "LOAD_ORDER_LIST",
        setSellerOrderList:(sellerUser, dispatch) => dispatch(setSellerUserList(sellerUser))
    }
}
