const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser())

require('./src/config/mongoose.config')

// Directorio Público
app.use(express.static('public'))

// Routes import
const root = require('./src/routes/root.routes')
const user = require('./src/routes/user.routes')
const shop = require('./src/routes/shop.routes')
// eslint-disable-next-line no-unused-vars
const comment = require('./src/routes/comment.routes')

app.use(
  cors({
    origin: 'http://localhost:3000',
    // Credenciales
    credentials: true
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', root)
app.use('/api/v1/user', user)
app.use('/shops', shop)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
  // console.log(listEndpoints(app))
})
