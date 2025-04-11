const express = require('express')
const app = express()

app.use(express.json()) // Όταν θέλουμε το express να διαβάσει json να στείλει

const user = require('./routes/users.routes')

app.use('/api/users', user)

module.exports = app