const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { User } = require("../database/models");

const user = {
  list: async (req, res) => {
    try {
      const users = await User.findAll({});
      res.json(users);
    } catch (error) {
      res.send(error);
    }
  },
  create: async (req, res) => {
    const { firstName, lastName, email, password, roleId } = req.body;

    const createdUser = new User({
      firstName,
      lastName,
      email,
      password,
      roleId,
    });

    try {
      await createdUser.save();
      return res.status(201).json({
        user: createdUser,
      });
    } catch (error) {
      return res.status(400).json({
        error: error,
      });
    }
  },
  update: async (req, res) => {
    let userId = Number(req.params.id);

    const { firstName, lastName, email, password, roleId } = req.body;

    const updateData = {
      firstName,
      lastName,
      email,
      password,
      roleId,
    };

    try {
      let updatedUser = await User.update(updateData, {
        where: {
          id: userId,
        },
      });
      res.send({ msg: "User actualizado correctamente" });
    } catch (error) {
      console.log("Error en el update: ", error);
    }
  },
  delete: async (req, res) => {
    let userId = Number(req.params.id);
    try {
      let softDeleteUser = await User.destroy({
        where: {
          id: userId,
        },
      });
      res.send({ msg: `Se elimino el usuario con el id: ${userId}` });
    } catch (error) {
      console.log("Error en delete: ", error);
    }
  },
};

module.exports = user;
