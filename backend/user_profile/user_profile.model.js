const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/myapp");

autoIncrement.initialize(connection);

const schema = new Schema({
    user_profile_name: { type: String, unique: true, required: true },
    roles:{type:Array, required: true},
    security_model:{type:Array, required: true},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

schema.plugin(autoIncrement.plugin, {model:'UserProfile',startAt: 10000,incrementBy: 1});

module.exports = mongoose.model('UserProfile', schema);
