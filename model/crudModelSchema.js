const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

crudSchema.set("timestamps", true);
module.exports = mongoose.model("crud", crudSchema);
