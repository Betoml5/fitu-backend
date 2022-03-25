require("dotenv").config();

const config = {
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  authJwtSecret: process.env.JWT_SECRET,
  defaultPassword: process.env.DEFAULT_PASSOWORD,
};

module.exports = { config };
