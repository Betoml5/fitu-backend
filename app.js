const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { config } = require("./config");

const userRoutes = require("./routes/User");
const authRoutes = require("./routes/Auth");
mongoose
  .connect(
    `mongodb+srv://${config.dbUser}:${config.dbPassword}${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`Conectado a la [DB]`);
  })
  .catch((e) => console.log("Error", e));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
