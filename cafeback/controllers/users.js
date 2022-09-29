const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { User } = require('../database/models')

const controller = {
  list: async (req, res) => {
    try {
    const users = await User.findAll({})
    res.json(users)
    }
    catch (error) { res.send(error);
    }    
  },
}

module.exports = controller
