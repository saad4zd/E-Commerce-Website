const express = require("express");
const app = express();
const adminRoutes = require("./routes/adminRoutes");

app.use("/", adminRoutes);
app.listen(3000);