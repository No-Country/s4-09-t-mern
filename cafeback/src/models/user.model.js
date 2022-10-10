// const Joi = require('joi')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Nombre obligatorio."]
  },
  lastName: {
    type: String,
    required: [true, "Apellido obligatorio."]
  },
  email: {
    type: String,
    required: [true, "E-mail obligatorio"],
    validate: {
      validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Ingrese email válido"
    },
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password obligatorio."],
    minlength: [8, "Password debe tener al menos 8 caracteres"]
  }
}, { timestamps: true, versionKey: false })

// const validateUser = (user) => {
//   const schema = Joi.object({
//     id: Joi.string().required()
//   })
//   return schema.validate(user)
// }

// userSchema.pre('save', function (next) {
//   mongoose.models.User.findOne({ id: this.id }, function (err, results) {
//     if (err) {
//       console.log(err)
//     } else if (results) { // there was a result found, so the a id exists
//       console.error('id must be unique')
//     }
//     next()
//   })
// })
//Se realiza cuando no queremos guardarlo en BD
userSchema.virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set(value => this._confirmPassword = value)

//Se hace ANTES de validar el esquema de usuario
userSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Las contraseñas no coinciden')
  }
  next()
})

//Antes de guardar usuario, encriptamos contraseña
userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash
      next()
    })
})
const User = mongoose.model('User', userSchema)
module.exports = User
// exports.validateUser = validateUser
