const { Comment } = require('../models/comments')

const comment = {
  list: async (req, res) => {
    try {
      const comments = await Comment.find({})
      res.json(comments)
    } catch (error) {
      res.send(error)
    }
  },
  getById: async (req, res) => {
    const { id } = req.params

    Comment.findById(id)
      .then(comment => {
        res.status(200).json(comment)
      })
      .catch(err => console.log(err))
  },
  create: async (req, res) => {
    const { userId, shopId, textComment } = req.body

    const createdComment = new Comment({
      userId, shopId, textComment
    })

    try {
      await createdComment.save()
      return res.status(201).json({
        comment: createdComment
      })
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        error
      })
    }
  },
  update: async (req, res) => {
    const commentId = req.params.id

    const { userId, shopId, textComment } = req.body

    const updateData = {
      userId, shopId, textComment
    }

    try {
      await Comment.findByIdAndUpdate(commentId, updateData)
      res.status(200).json({ msg: 'Comment updated', comment: updateData })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  deleteComment: async (req, res) => {
    const commentId = req.params.id

    try {
      await Comment.findByIdAndRemove(commentId)
      res.send({ msg: `Comment with id:${commentId} was deleted` })
    } catch (error) {
      console.log('Delete error: ', error)
    }
  }
}

module.exports = comment
