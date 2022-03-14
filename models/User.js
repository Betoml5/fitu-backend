
const { Schema, model } = require("mongoose")


const User = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    roles: { type: String, required: true },
    sizes: {
        leg: { type: Number, default: 0 },
        arm: { type: Number, default: 0 },
        waist: { type: Number, default: 0 },
    },
    timeline: [],
    pictures: [],
    programs: []



})

module.exports = model("User", User)