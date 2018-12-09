const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Permission: require('../permissions/permission.model'),
    Role: require('../roles/roles.model'),
    SecurityModel: require('../security_model/security_model.model'),
    UserProfile: require('../user_profile/user_profile.model')
};
