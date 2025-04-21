const mongoose = require('mongoose')
const request = require('supertest')


const app = require('../app')

require('dotenv').config()

// Connecting to MongoDB before each test
beforeEach(async()=> {  // διαδικασία του jest 
  await mongoose.connect(process.env)
  .then(() => {
    console.log("Connection to MongoDB established for jest")
  },
  err => {
    console.log("Failed to connect to MongoDB for jest", err)
  })
}) 