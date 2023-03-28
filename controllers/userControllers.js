let home = (req, res) => {
    res.send('<h1>User Home Page</h1>');
};

let login = (req, res) => {
    res.send('<h1>User Login Page</h1>');
};

let signUp = (req, res) => {
    res.send('<h1>User signUP Page</h1>');
};

module.exports = { home, login, signUp };