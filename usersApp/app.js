const express = require('express')
const app = express()

const user = require('./routes/users.routes')

app.use('/api/users', user)

module.exports = app