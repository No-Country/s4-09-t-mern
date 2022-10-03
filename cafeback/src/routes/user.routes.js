const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.status(200).send('user routes')
})

// router.post('/', checkJwt, addUserToAuth0, createUserController)
// router.get('/:id', addUserToAuth0, getUserById)
// router.put('/:id', addUserToAuth0, updateUserById)
// router.delete('/:id', addUserToAuth0, deleteUserById)
// router.post('/favorites/:id', addUserToAuth0, addFavorite)

module.exports = router
