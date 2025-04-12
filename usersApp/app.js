const express = require('express')
const app = express()

app.use(express.json()) // Όταν θέλουμε το express να διαβάσει json να στείλει

const user = require('./routes/users.routes')
const userProduct = require('./routes/user.products.routes')

app.use('/api/users', user)
app.use('/api/user-product', userProduct)  // Στα endpoint εδώ βάζουμε -

module.exports = app