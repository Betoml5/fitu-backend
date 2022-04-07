const { Schema, model } = require("mongoose");

const Meeting = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: "customer", required: true },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = model("Meeting", Meeting);
