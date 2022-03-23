const { Schema, model } = require("mongoose");
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcrypt");

const User = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: {
    type: String,
    required: true,
    default: () => bcrypt.hashSync("fmpassword", SALT_WORK_FACTOR),
  },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  sizes: {
    leg: { type: Number, default: 0 },
    arm: { type: Number, default: 0 },
    waist: { type: Number, default: 0 },
  },
  timeline: [],
  pictures: [],
  programs: [],
});

//Aqui lo que hacemos es que antes de que se guarde el usuario, vamos a encriptar la constraseña
// OJO SI USAMOS ARROW FUNCTIONS, VAMOS A TENER PROBLEMAS CON THIS.
User.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

User.pre("findOneAndUpdate", async function (next) {
  try {
    if (this._update.password) {
      const hashed = await bcrypt.hash(this._update.password, SALT_WORK_FACTOR);
      this._update.password = hashed;
    }
    next();
  } catch (err) {
    return next(err);
  }
});

User.validatePassword = async function validatePassword(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model("User", User);
