const User = require("../models/User");
const responseHTTP = require("../network/response");
const controller = {
  signIn: async (req, res) => {},
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
