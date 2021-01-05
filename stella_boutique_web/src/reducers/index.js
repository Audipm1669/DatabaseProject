import registerReducer from './registerRedux';
import loginReducer from './loginRedux';
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import UserOrderListReducer from './UserOrderListReducer';
import UserMyLikeReducer from './UserMyLikeReducer';
const rootReducer = combineReducers({
    LoginUser: loginReducer,
    registerUser: registerReducer,
    ProductList: productReducer,
    userOrderList: UserOrderListReducer,
    userMyLike: UserMyLikeReducer
})

export default rootReducer