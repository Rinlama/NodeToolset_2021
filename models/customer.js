const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  createdDate: {
    type: String,
    required: true,
    default: Date.now,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
