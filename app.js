const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { config } = require("./config");
const passport = require("passport");
const cors = require("cors");
const userRoutes = require("./routes/User");
const authRoutes = require("./routes/Auth");
const customersRoutes = require("./routes/Customers");
const meetingsRoutes = require("./routes/Meeting");

mongoose
  .connect(
    `mongodb+srv://${config.dbUser}:${config.dbPassword}${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`Conectado a la [DB]`);
  })
  .catch((e) => console.log("Error", e));

app.use(express.json());

app.use(cors("*"));

require("./auth");
app.use(passport.initialize());
app.use("/api/users", userRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/meetings", meetingsRoutes);

module.exports = app;
