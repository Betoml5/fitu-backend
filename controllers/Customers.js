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
        firstName: { $regex: ".*" + name + ".*" },
      }).select("-password");

      return responseHTTP.success(req, res, customers, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },

  findOne: async () => {
    const { id } = req.params;
    try {
      const customer = await User.findById(id).select("-password").where("role", "user");
      return responseHTTP.success(req, res, customer, 200)
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  }
};

module.exports = controller;
