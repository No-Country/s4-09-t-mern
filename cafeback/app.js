const express = require('express')
const app = express()
const cors = require("cors")
const path = require('path')
const usersRoutes = require('./routes/users')

// dotenv is a module that loads environment variables from a .env file into process.env
require('dotenv').config()
// cors
app.use(cors())

// PORT
const PORT = process.env.PORT || 3001

// Middleware
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Start server in process.env.PORT or 3000
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})

// Routes
app.use('/api/v1/users', usersRoutes)


