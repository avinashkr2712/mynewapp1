const config = require('../config.json');
const db = require('../_helpers/db');
const UserProfile = db.UserProfile;

module.exports = {
    getAll,
    getById,
    create
};


async function getAll() {
    return await UserProfile.find();
}

async function getById(id) {
    return await UserProfile.findById(id);
}

async function create(UserProfileParam) {
    // validate
    if (await UserProfile.findOne({ user_profile_name: UserProfileParam.user_profile_name })) {
        throw 'UserProfile "' + UserProfileParam.user_profile_name + '" already exists';
    }

    const userProfile = new UserProfile(UserProfileParam);

    try{
        // save user
      return await userProfile.save();
    }
    catch(e)
    {
      throw new Error('error while creating userProfile');
    }
    

    
}
