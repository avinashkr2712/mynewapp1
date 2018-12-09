const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/myapp");

autoIncrement.initialize(connection);

const schema = new Schema({
    security_model_type: { type: String, required: true },
    security_model_name: { type: String, unique: true, required: true },
    security_model_parent_id: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

schema.plugin(autoIncrement.plugin, {model:'SecurityModel',startAt: 10000,incrementBy: 1});

module.exports = mongoose.model('SecurityModel', schema);
