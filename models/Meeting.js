const { Schema, model } = require("mongoose");

const Meeting = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date: {
    type: String,
    required: true,
  },
  completed: { type: Boolean, default: false },
});

module.exports = model("Meeting", Meeting);
