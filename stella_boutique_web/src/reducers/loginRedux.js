const initialState = {
    username: "",
    password: "",
    userID: 0
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN_USER": {
            console.log(action.username);
            console.log(action.password);
            console.log(action.userID);
            return {
                ...state,
                username: action.username,
                password: action.password,
                userID: action.userID
            }
        }
        default:
            return state;
    }
}
export default loginReducer;