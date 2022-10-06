const jwt = require('jsonwebtoken');

const secretToken = process.env.JWT_SECRET;

// Function to sign the token, receives user data
const signToken7d = async (userData) => {
  let token = jwt.sign(
    {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      rol: userData.rol,
    },
    secretToken,
    {
      expiresIn: '7d', // How many days is active
    }
  );

  return token;
};

// Function to verify token
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, secretToken);
  } catch (e) {
    return null;
  }
};

module.exports = { signToken7d, verifyToken };
