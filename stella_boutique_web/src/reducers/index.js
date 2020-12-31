import registerReducer from './registerRedux';
import loginReducer from './loginRedux';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    loginUser: loginReducer,
    registerUser: registerReducer
})

export default rootReducer