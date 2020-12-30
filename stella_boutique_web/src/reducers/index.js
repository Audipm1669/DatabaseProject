import registerReducer from './registerRedux'
import { combineReducers } from 'redux'
import { loginUser } from '../actions'

const rootReducer = combineReducers({
    loginUser: loginUser,
    registerUser: registerReducer
})

export default rootReducer