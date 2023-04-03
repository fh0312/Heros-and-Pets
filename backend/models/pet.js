var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PetSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});


// Export model.
module.exports = mongoose.model("Pet", PetSchema);