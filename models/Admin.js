const { Schema } = require("mongoose")


const Admin = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },

})