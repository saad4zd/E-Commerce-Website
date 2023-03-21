const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    process.env.DATABASE_NAME, process.env.USER_NAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
}
);

const db = {};

db.sequelize = sequelize;
db.admin = require('./adminModel')(sequelize);
db.user = require('./userModel')(sequelize);

module.exports = db;