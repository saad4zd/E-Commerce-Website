exports.login = (req, res) => {
    res.send("Login Page");
};

exports.dashboard = (req, res) => {
    res.send("Dashboard Page");
};

exports.addAdmin = (req, res) => {
    res.send("Add Admin Page");
};

module.exports = { login, dashboard, addAdmin };