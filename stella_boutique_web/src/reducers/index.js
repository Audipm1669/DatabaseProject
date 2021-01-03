import registerReducer from './registerRedux';
import loginReducer from './loginRedux';
import { combineReducers } from 'redux';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    LoginUser: loginReducer,
    registerUser: registerReducer,
    ProductList: productReducer
})

export default rootReducer