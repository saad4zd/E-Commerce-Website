require('dotenv').config();
const express = require('express');

const app = express();
let port = 3000;

let adminRoutes = require('./routes/adminRoutes');
let userRoutes = require('./routes/userRoutes');

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

let start = async () => {
    await require('./models').sequelize.sync().then(() => console.log('Connected to Database')).catch((err) => console.log(`Failed Error : ${err.message}`));
    app.listen(port, () => {
        console.log(`Server is Listening on Port : ${port}`);
    });
};

start();