const express = require('express')
const router = express.Router()

const { list, getById, create, update, deleteShop } = require('../controllers/shop.controller')

router.get('/', list)

router.get('/:id', getById)

router.post('/', create)

router.patch('/:id', update)

router.delete('/:id', deleteShop)

module.exports = router
