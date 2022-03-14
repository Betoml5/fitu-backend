const User = require("../models/User");
const responseHTTP = require("../network/response");

const controller = {
  find: async (req, res) => {
    try {
      const users = await User.find({});
      return responseHTTP.success(req, res, users, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      return responseHTTP.success(req, res, user, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { user } = req.body;
    try {
      const userUpdated = User.updateOne(id, user);
      return responseHTTP.success(req, res, userUpdated, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndRemove(id, { new: true });
      return responseHTTP.success(req, res, user, 200);
    } catch (error) {
      return responseHTTP.error(req, res, error, 500);
    }
  },
};

module.exports = controller;
