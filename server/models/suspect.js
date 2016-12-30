var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var suspectSchema = new Schema({
    name: String
});

suspectSchema.index({name:1}, {unique:true});

module.exports = mongoose.model('Suspect', suspectSchema);
