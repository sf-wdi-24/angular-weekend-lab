var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ItemSchema = new Schema({

	name:{type: String, required: true}, 
	category: { type: String, required: true}, 
	image: { type: String, required: false},
});

var Item = mongoose.model("Item", ItemSchema);
module.exports = Item;