const initialState = {
    username: "",
    password: ""
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN_USER": {
            return {
                ...state,
                username: action.username,
                password: action.password,
            }
        }
        default:
            return state;
    }
}
export default loginReducer;