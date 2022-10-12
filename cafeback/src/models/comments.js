const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new Schema({
  userId: {
    type: String

  },
  shopId: {
    type: String,
    default: ''
  },
  textComment: {
    type: String
  }
}, { timestamps: true, versionKey: false })

exports.Comment = mongoose.model('Comment', commentSchema)
