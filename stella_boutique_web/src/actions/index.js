export function loginUser(userID, password) {
    return {
        type: "LOGIN_USER",
        userID: userID,
        password: password
    }
}