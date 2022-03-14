const User = require("../models/User");
const responseHTTP = require("../network/response");
const passport = require("passport");

const controller = {
  signIn: async (req, res, next) => {
    passport.authenticate("login", async (err, user, info) => {
      try {
        if (err | !user)
          return responseHTTP.error(
            req,
            res,
            {
              message: "Password or email incorrect",
            },
            403
          );

        req.login(user, { session: false }, async (err) => {
          if (err) next(err);
          const payload = { user };
          const token = jwt.sign(
            { id: user._id, roles: [req.user.role] },
            config.authJwtSecret
          );
          return responseHTTP.success(req, res, { token, payload }, 200);
        });
      } catch (error) {
        return responseHTTP.error(req, res, error, 500);
      }
    })(req, res, next);
  },
  signUp: async (req, res) => {
    const { user } = req.body;
    try {
      if (!user) {
        return responseHTTP.error(
          req,
          res,
          { message: "Falta informacion" },
          400
        );
      }

      const checkUser = await User.findOne({
        controlNumber: user.controlNumber,
      });
      if (checkUser) {
        return responseHTTP.error(
          req,
          res,
          { message: "Este numero de control ya existe" },
          500
        );
      }

      const userCreated = await User.create(user);
      return responseHTTP.success(req, res, userCreated, 201);
    } catch (error) {
      console.log(error);
      return responseHTTP.error(req, res, error, 500);
    }
  },
};

module.exports = controller;
