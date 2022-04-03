const { Schema, model } = require("mongoose");

const Meeting = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: "customer" },
  date: { type: Date },
});

module.exports = new model("Meeting", Meeting);
