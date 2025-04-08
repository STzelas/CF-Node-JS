const express = require('express')
const app = express()
const port = 3000

app.get("/", (request, response) => { // localhost:3000
  console.log("Get request")
  response.send("Hello World")
})  

app.get("/about", (request, response) => {
  console.log("About page")
  response.send("This is the about page")
})

app.get("/help", (request,response) => {
  console.log("Help page")
  response.send("This is the help page")
})

app.get("/user", (request, response) => {
  // ?name=Bob&surname=Dylan&age=81
  let query = request.query  // παραμετροι user

  let name = query.name
  let surname = query.surname
  let age = query.age

  console.log("Query: ", query)
  response.send(`Name: ${name}, Surname: ${surname}, Age: ${age}`)
})

app.get("/user/:name/:surname/:age", (request, response) => {
  let params = request.params
  console.log("Params", params)

  let name = params.name
  let surname = params.surname
  let age = params.age

  response.send(`Name: ${name}, Surname: ${surname}, Age: ${age}`)
})

app.listen(port, () => {
  console.log(`Server is running in port: ${port}`)
})