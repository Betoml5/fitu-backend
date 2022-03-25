const { body, check, validationResult } = require("express-validator");

exports.validateRegister = [
  body("email")
    .toLowerCase()
    .trim()
    .isEmail()
    .withMessage("Must be a valid email"),
  body("firstName").toLowerCase().isString(),
  body("lastName").toLowerCase().isString(),
  body("password").toLowerCase().isAlphanumeric(),
  body("role").toLowerCase().isString()
];