const express = require('express')
const router = express.Router()

const { createUserController, getUserById } = require('./../controllers/user.controller')



router.get('/', (req, res) => {
  res.status(200).send('user routes')
})

router.post('/', createUserController)
router.get('/:id', getUserById)
// router.put('/:id', addUserToAuth0, updateUserById)
// router.delete('/:id', addUserToAuth0, deleteUserById)
// router.post('/favorites/:id', addUserToAuth0, addFavorite)

module.exports = router
