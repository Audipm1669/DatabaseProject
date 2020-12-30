export function loginUser(username, password, userID) {
    return {
        type: "LOGIN_USER",
        username: username,
        password: password,
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