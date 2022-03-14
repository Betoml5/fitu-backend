const passport = require("passport");
const User = require("../models/User");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const { config } = require("../config");

passport.use(
  "login",
  new localStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) return done(null, false, { message: "User not found" });

        const validate = await bcrypt.compare(password, user.password);
        if (!validate) return done(null, false, { message: "Wrong password" });
        delete user._doc.password;
        return done(null, user, { message: "Login sucessfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    (token, done) => {
      try {
        if (!token) {
          return done(null, "Token required");
        }
        return done(null, token);
      } catch (e) {
        done(e);
      }
    }
  )
);
