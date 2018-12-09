const config = require('../config.json');
const db = require('../_helpers/db');
const SecurityModel = db.SecurityModel;

module.exports = {
    getAll,
    getById,
    create
};


async function getAll() {
    return await SecurityModel.find();
}

async function getById(id) {
    return await SecurityModel.findById(id);
}

async function create(securityModelParam) {
    // validate
    if (await SecurityModel.findOne({ security_model_name: securityModelParam.security_model_name })) {
        throw 'SecurityModel "' + securityModelParam.security_model_name + '" already exists';
    }

    const securityModel = new SecurityModel(securityModelParam);

    try{
        // save user
      return await securityModel.save();
    }
    catch(e)
    {
      throw new Error('error while creating security_model_name');
    }
    

    
}
