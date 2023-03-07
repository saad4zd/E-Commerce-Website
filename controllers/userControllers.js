let home = (req, res) => {
    res.send('<h1>User Home Page</h1>');
};

let login = (req, res) => {
    res.send('<h1>User Login Page</h1>');
};

let signUp = (req, res) => {
    res.send('<h1>User signUP Page</h1>');
};

let getProductAll = (req, res) => {
    res.send('<h1>User all products Page</h1>');
};

let getSingleProduct = (req, res) => {
    res.send('<h1>User single Page</h1>');
};

let deleteProduct = (req, res) => {
    res.send('<h1>User delete product Page</h1>');
};

let cart = (req, res) => {
    res.send('<h1>User cart Page</h1>');
};

let order = (req, res) => {
    res.send('<h1>User order Page</h1>');
};

let orderHistory = (req, res) => {
    res.send('<h1>User order history Page</h1>');
};

let feedback = (req, res) => {
    res.send('<h1>User feedback Page</h1>');
};

module.exports = { home, login, signUp, getProductAll, getSingleProduct, deleteProduct, cart, order, orderHistory, feedback };