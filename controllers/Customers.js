const User = require("../models/User");
const responseHTTP = require("../network/response");

const controller = {
  find: async (req, res) => {
    try {
      const users = await User.find({}).select("-password");
      const customers = users.filter((usuario) => usuario.role !== "admin");
      return responseHTTP.success(req, res, customers, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
  findByName: async (req, res) => {
    const { name } = req.query;
    try {
      const customers = await User.find({
        firstName: { $regex: ".*" + name.toLowerCase() + ".*" },
      }).select("-password");

      return responseHTTP.success(req, res, customers, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },

  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const customer =
        (await User.findById(id).select("-password").where("role", "user")) ||
        {};
      return responseHTTP.success(req, res, customer, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
  create: async (req, res) => {
    try {
      const { user } = req.body;
      if (!user)
        return responseHTTP(res, res, { message: "Missing information" }, 500);
      const newUser = await User.create(user);
      return responseHTTP(req, res, newUser, 201);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
};

module.exports = controller;
