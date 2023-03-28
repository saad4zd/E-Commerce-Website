const login = (req, res) => {
    res.send("Login Page");
};

const dashboard = (req, res) => {
    res.send("Dashboard Page");
};

const addAdmin = (req, res) => {
    res.send("Add Admin Page");
};

module.exports = { login, dashboard, addAdmin };