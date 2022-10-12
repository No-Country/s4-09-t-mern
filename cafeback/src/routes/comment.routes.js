const express = require('express')
const router = express.Router()

const { list, getById, create, update, deleteComment } = require('../controllers/comment.controller.js')

router.get('/', list)

router.get('/:id', getById)

router.post('/', create)

router.patch('/:id', update)

router.delete('/:id', deleteComment)

module.exports = router
