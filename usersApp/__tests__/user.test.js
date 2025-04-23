const mongoose = require('mongoose')
const request = require('supertest')

const authService = require('../services/auth.service')
const userService = require('../services/user.services')

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

  let token;
  // Πριν τρέξει τα τεστ
  beforeAll(() => {
    user = {
      username: "user1",
      email: "user1@aueb.gr",
      roles: ["READER", "ADMIN"]
    }
    token = authService.generateAccessToken(user)
  })

  it("GET Returns all users", async () => {  // εκτός απο it μπορούμε και test είναι το ίδιο
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe(true) // ή toBeTruthy
    expect(res.body.data.length).toBeGreaterThan(0)
  }, 50000)

  it("POST Creates a user", async() => {

    const testUser = {
      'username':'test1',
      'password':'12345',
      'name':'test1 name',
      'surname':'test1 surname',
      'email':'test1@aueb.gr',
      'address': {
        'area':'test area',
        'road':'test road'
      }
    }

    const res = await request(app)
        .post('/api/users')
        .set('Authorization', `Bearer ${token}`)
        .send(testUser)

        expect(res.statusCode).toBe(200)
        expect(res.body.status).toBe(true) // ή toBeTruthy
  }, 50000)
})

describe("Requests for /api/user/:username", () => {
  let token;

  beforeAll(() => {
    user = {
      username: "user1",
      email: "user1@aueb.gr",
      roles: ["READER", "ADMIN"]
    }
    token = authService.generateAccessToken(user)
  })

  it('GET Returns specific a user', async() => {

    const result = await userService.findLastInsertedUser()
    console.log("RESULT >>>", result)

    const res = await request(app)
              .get('/api/users/' + result.username)
              .set('Authorization', `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body.status).toBeTruthy() // ή .toBe(true)
      expect(res.body.data.username).toBe(result.username)
      expect(res.body.data.email).toBe(result.email)
  })
})