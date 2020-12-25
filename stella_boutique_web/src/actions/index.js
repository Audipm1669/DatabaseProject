export function loginUser(username, password) {
    return {
        type: "LOGIN_USER",
        username: username,
        password: password
    }
}