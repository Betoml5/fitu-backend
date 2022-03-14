const passport = require("passport");
const responseHTTP = require("../network/response");

const middlewares = {
  verifyAuth: (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      //si hubo un error relacionado con la validez del token (error en su firma, caducado, etc)
      if (info) {
        return responseHTTP.error(req, res, info.message, 401);
      }
      //si hubo un error en la consulta a la base de datos
      if (err) {
        return responseHTTP.error(req, res, err, 401);
      }
      //si el token está firmado correctamente pero no pertenece a un usuario existente
      if (!user) {
        return responseHTTP.error(req, res, { message: "No user found" }, 401);
      }
      //inyectamos los datos de usuario en la request
      req.user = user;
      next();
    })(req, res, next);
  },
  verifyRole: (req, res, next) => {
    if (!req.user.roles.includes("admin")) {
      return responseHTTP.error(req, res, { message: "Unautorized" }, 401);
    }
    next();
  },
};

module.exports = middlewares;
