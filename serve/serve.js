const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

require('./db/config')

/// Initial routes
app.use('/api', require('./routes/index'))

const PORT = process.env.PORT
// Init Serve
app.listen(PORT)