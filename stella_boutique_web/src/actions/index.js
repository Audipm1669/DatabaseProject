export function loginUser(email, password) {
    return {
        type: "LOGIN_USER",
        email: email,
        password: password
    }
}