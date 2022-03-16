const User = require("../models/User");
const responseHTTP = require("../network/response")

const controller = {
    find: async (req, res) => {
        try {
            const users = await User.find({}).select("-password");
            const customers = users.filter(usuario => usuario.role !== "admin");
            return responseHTTP.success(req, res, customers, 200)
        } catch (error) {
            return responseHTTP.error(req, res, error, 500)
        }
    }
}

module.exports = controller;