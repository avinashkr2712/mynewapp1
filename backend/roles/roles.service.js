const config = require('../config.json');
const db = require('../_helpers/db');
const Role = db.Role;

module.exports = {
    getAll,
    getById,
    create
};


async function getAll() {
    return await Role.find();
}

async function getById(id) {
    return await Role.findById(id);
}

async function create(RoleParam) {
    // validate
    if (await Role.findOne({ role_name: RoleParam.role_name })) {
        throw 'Role "' + RoleParam.role_name + '" already exists';
    }

    const role = new Role(RoleParam);

    try{
        // save user
      return await role.save();
    }
    catch(e)
    {
      throw new Error('error while creating role');
    }
    

    
}
