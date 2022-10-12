const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { signToken7d } = require('../utils/jwtHelper');

router.get('/login', (req, res) => {
  res.status(200).send('ruta para loguearse');
});

// Demo routes
router.post('/generateToken', async (req, res) => {
  // Validate User Here
  let user = {
    id: 1,
    name: 'Marcos',
    email: 'jcasanova@gmail.com',
    rol: 1,
  };

  // Then generate JWT Token
  let JWT = await signToken7d(user);

  res.send(JWT);
});

router.get('/validateToken', (req, res) => {
  // Tokens are generally passed in the header of the request
  // Due to security reasons.

  let jwtSecretKey = process.env.JWT_SECRET;
  try {
    // Receives token from header
    const token = req.header('Authorization');

    // Decodes the token and "gets" the info
    const verified = jwt.verify(token, jwtSecretKey);

    if (verified) {
      return res.json(verified);
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
});

module.exports = router;
