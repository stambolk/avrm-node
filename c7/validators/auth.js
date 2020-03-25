const register = {
    full_name: "required|minLength:5",
    password: "required|string",
    password2: "required|string",
    email: "required|email"
};

const login = {
    email: "required|email",
    password: "required|string"
}

module.exports = {
    register,
    login
};