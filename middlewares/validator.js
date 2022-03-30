const { body, check, validationResult } = require("express-validator");

exports.register = [
  check("email").isEmail().withMessage("must be a valid email"),
  check("password").isLength({ min: 8 }).withMessage("password 8 chars long!"),
];

exports.validateRegister = [
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Must be a valid email"),
  check("firstName").not().isEmpty().isString().withMessage("Must be a string"),
  check("lastName").not().isEmpty().isString(),
  check("password").not().isEmpty().isString().isLength({ min: 8 }),
  check("role").not().isEmpty().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];
