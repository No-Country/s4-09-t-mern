const User  = require('../models/user.model')

const jwt = require("jsonwebtoken");
const secret_key = "Esta es mi llave secreta";
const bcrypt = require("bcrypt");


module.exports.register = (req, res) => {
  const user = new User(req.body);
  user.save()
    .then(usuario => {
      /*res.json(usuario);*/

      const payload = {
        _id: user._id
      }

      //Guardar al usuario en una cookie
      const myJWT = jwt.sign(payload, secret_key);

      res
        .cookie("usertoken", myJWT, secret_key, {
          httpOnly: true
        })
        .json(usuario)
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    })
}

module.exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user === null) {
        res.json({ error: true, message: "El correo electrónico es incorrecto." });
      } else {
        bcrypt.compare(req.body.password, user.password)
          .then(passwordValid => {
            if (passwordValid) {
              const payload = {
                _id: user._id
              }

              const myJWT = jwt.sign(payload, secret_key);

              res
                .cookie("usertoken", myJWT, secret_key, {
                  httpOnly: true
                })
                .json({ error: false, message: "Inicio de sesión correcto" })


            } else {
              res.json({ error: true, message: "La contraseña es incorrecta." })
            }
          })
          .catch(err => res.json({ error: true, message: "Inicio de sesión inválido." }))
      }
    })
    .catch(err => res.json(err));
}

module.exports.createUserController = async (req, res, next) => {
  // const { err } = validateUser(req.body)
  // if (err) return res.status(400).send(err.details[0].message)
  // else {
  try {
    const user = new User(req.body)
    const newUser = await user.save()
    res.status(200).send(newUser)
  } catch (err) {
    next(err)
  }
  // }
}

module.exports.getUserById = (req, res, next) => {
  const { id } = req.params
  User.findOne({ id })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
}

module.exports.updateUserById = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({ id: req.params.id }, req.body, { new: true, runValidators: true })
    if (!user) res.status(400).send('No se encontró un usuario con el ID especificado')
    else res.send(user)
  } catch (err) {
    next(err)
  }
}

module.exports.deleteUserById = async (req, res, next) => {
  try {
    const user = await User.findOneAndDelete({ id: req.params.id })
    if (!user) res.status(400).send('No se encontró un usuario con el ID especificado')
    else res.send(user)
  } catch (err) {
    next(err)
  }
}

module.exports.addFavorite = async (req, res, next) => {
  try {
    await User.findOneAndUpdate({ id: req.params.id }, { $push: { favorites: req.body.article_id } }, { new: true })
    await Article.findOneAndUpdate({ id: req.params.id }, { $inc: { favorites: 1 } }, { new: true })
    res.send({})
  } catch (err) {
    next(err)
  }
}
