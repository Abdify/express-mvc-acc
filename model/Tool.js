const mongoose = require("mongoose");

const toolSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide the product name."],
    trim: true,
    unique: true,
    minLength: [5, "Not less than 5 characters."],
    maxLength: [50, "Not more than 50 characters."],
  },
  description: {
    type: String,
    required: [true, "Provide genuine description."],
    trim: true,
    minLength: [15, "Not less than 15 characters."],
  },
  unit: {
    type: String,
    required: [true, "Provide exact type unit."],
    trim: true,
    enum: {
      values: ["kg", "pcs"],
      message: "Invalid unit {VALUE} try kg/pcs.",
    },
  },
  quantity: {
    type: Number,
    required: [true, "Provide valid integer value."],
    trim: true,
    min: [0, "QTY won't be negative."],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {timestamps: true});

const Tool = mongoose.model("Tools", toolSchema);

// module exports
module.exports = Tool;
