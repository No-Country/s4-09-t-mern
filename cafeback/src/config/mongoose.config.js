const mongoose = require('mongoose')

const { DB_URI } = process.env

mongoose.connect('mongodb+srv://kennyJ:Nl73Cz2gYPYr0FAK@cluster0.bhmr0kv.mongodb.net/test', DB_URI, {
  useNewUrlParser: true,
  UseUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Cannot connect to DB', err))
