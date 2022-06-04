const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema(
  {
    original: {
      type: String,
      required: [true, "Original link is required"],
    },

    short: {
      type: String,
      required: [true, "Short link is required"],
      unique: true,
    },

    clicks: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Link", LinkSchema);
