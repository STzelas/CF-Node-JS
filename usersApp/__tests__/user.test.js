const mongoose = require('mongoose')
const request = require('supertest')


const app = require('../app')

require('dotenv').config()

// Connecting to MongoDB before each test
beforeEach(async()=> {  // διαδικασία του jest 
  await mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connection to MongoDB established for jest")
  },
  err => {
    console.log("Failed to connect to MongoDB for jest", err)
  })
}) 

// Close connection to MongoDB after each test
afterEach(async()  => {
  await mongoose.connection.close()
})

describe("Requests for /api/users", () => {
  it("GET Returns all users", async () => {  // εκτός απο it μπορούμε και test είναι το ίδιο
    const res = await request(app)
      .get('/api/users')

    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe(true) // ή toBeTruthy
    expect(res.body.data.length).toBeGreaterThan(0)
  }, 50000)                       
})