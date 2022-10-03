// const Joi = require('joi')
const mongoose = require('mongoose')
const { Schema } = mongoose

const shopSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  long: {
    type: Number,
    default: 0
  },
  lat: {
    type: Number ,
    default: 0
  },
}, { timestamps: true, versionKey: false })

exports.Shop = mongoose.model('Shop', shopSchema);
