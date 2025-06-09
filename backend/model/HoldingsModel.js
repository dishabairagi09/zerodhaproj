const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
}, { timestamps: true });

// ✅ Compile schema into a model
const HoldingsModel = mongoose.model("Holdings", HoldingsSchema);

// ✅ Export the model
module.exports = HoldingsModel;
