var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stationSchema = new Schema({
    name: String
});

stationSchema.index({name:1}, {unique:true});

module.exports = mongoose.model('Station', stationSchema);
