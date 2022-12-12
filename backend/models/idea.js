const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  long: String,
  short: String,
  arguments: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

ideaSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Idea", ideaSchema);
