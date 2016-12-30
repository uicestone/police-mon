var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    password: String,
    token: String,
    roles: [String]
});

userSchema.index({name:1}, {unique:true});

module.exports = mongoose.model('User', userSchema);
