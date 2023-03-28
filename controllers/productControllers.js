exports.viewProducts = (req, res) => {
    res.send("View Products Page");
};

exports.addProducts = (req, res) => {
    res.send("Add Products Page");
};

exports.updateProducts = (req, res) => {
    res.send("Update Products Page");
};

exports.removeProducts = (req, res) => {
    res.send("Remove Products Page");
};

exports.getSingleProduct = (req, res) => {
    res.send('<h1>User single Page</h1>');
};

module.exports = { viewProducts, addProducts, updateProducts, removeProducts, getSingleProduct };