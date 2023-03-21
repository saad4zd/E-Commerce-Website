const express = require('express');

const app = express();
let port = 3000;

let adminRoutes = require('./routes/adminRoutes');
let userRoutes = require('./routes/userRoutes');

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server is Listening on Port : ${port}`);
});