var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HeroSchema = new Schema({
  id: { type: Number, required: false},
  name: { type: String, required: true },
  pet: { type: Schema.ObjectId, ref: "Pet" },
});



// Export model.
module.exports = mongoose.model("Hero", HeroSchema);